import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { aiService } from '../services/aiService';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm the portfolio AI assistant. Ask me anything about my skills, experience, or projects.", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        console.log("Chatbot Component Mounted");
        // Initialize AI service when component mounts (or when chat opens to save resources initially, 
        // but pre-loading is better for UX if usage is expected)
        const loadModel = async () => {
            // Only load if not already loaded
            if (!aiService.isInitialized) {
                setIsModelLoading(true);
                try {
                    await aiService.init();
                } catch (error) {
                    console.error("AI Init failed", error);
                    setMessages(prev => [...prev, { id: Date.now(), text: "Failed to load AI model. Please check your connection.", sender: 'bot' }]);
                } finally {
                    setIsModelLoading(false);
                }
            }
        };

        // Lazy load on first open or just load immediately?
        // Loading immediately (~20MB) might slow down initial site load. 
        // Let's load on first open.
        if (isOpen) {
            loadModel();
        }
    }, [isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            if (!aiService.isInitialized && !isModelLoading) {
                // Should be loading from useEffect, but just in case
                await aiService.init();
            }

            // Simulate a small delay for "thinking" feel even if local is instant
            // await new Promise(r => setTimeout(r, 600)); 

            const response = await aiService.query(userMsg.text);

            const botMsg = {
                id: Date.now() + 1,
                text: response.answer,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I encountered an error.", sender: 'bot' }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] mb-4 pointer-events-auto flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5 text-cyan-400" />
                                <span className="font-semibold text-white">Portfolio Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50 backdrop-blur-sm">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user'
                                            ? 'bg-cyan-600 text-white rounded-tr-none'
                                            : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isModelLoading && (
                                <div className="flex justify-center py-2">
                                    <div className="bg-gray-800 text-xs text-gray-400 px-3 py-1 rounded-full border border-gray-700 flex items-center gap-2">
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                        Initializing AI Model... (approx 20MB)
                                    </div>
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none border border-gray-700">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-gray-800 border-t border-gray-700 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about skills, projects..."
                                className="flex-1 bg-black/30 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 placeholder-gray-500"
                                disabled={isModelLoading}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isModelLoading || isTyping}
                                className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {/* Toggle Button */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-20 right-0 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap mb-2 mr-2 z-[9999]"
                >
                    Ask me!
                    <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
                </motion.div>
            )}

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen ? {
                    boxShadow: ["0 0 0 0 rgba(8, 145, 178, 0.7)", "0 0 0 10px rgba(8, 145, 178, 0)"],
                } : {}}
                transition={!isOpen ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                } : {}}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-cyan-600 hover:bg-cyan-500 text-white p-4 rounded-full shadow-lg transition-all pointer-events-auto relative z-[9999]"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
