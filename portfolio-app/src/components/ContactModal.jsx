import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';

/**
 * Contact Modal component
 * Features form validation, success/error states, and accessibility
 * Logs submission to console (integration point for real email/API)
 */
const ContactModal = ({ isOpen, onClose }) => {
    // Focus trap
    useEffect(() => {
        if (isOpen) {
            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements?.length) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                const handleTabKey = (e) => {
                    if (e.key === 'Tab') {
                        if (e.shiftKey && document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        } else if (!e.shiftKey && document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                };

                const handleEscape = (e) => {
                    if (e.key === 'Escape') {
                        onClose();
                    }
                };

                document.addEventListener('keydown', handleTabKey);
                document.addEventListener('keydown', handleEscape);
                firstElement?.focus();

                return () => {
                    document.removeEventListener('keydown', handleTabKey);
                    document.removeEventListener('keydown', handleEscape);
                };
            }
        }
    }, [isOpen, onClose]);

    const modalRef = useRef(null);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
            >
                <motion.div
                    ref={modalRef}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="glass rounded-2xl max-w-lg w-full overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 md:p-8 text-center">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 id="contact-modal-title" className="text-3xl font-bold gradient-text">
                                Contact Me
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Close contact details"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {/* Name */}
                            <div className="p-4 glass rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Name</p>
                                <p className="text-xl font-semibold text-white">{personalInfo.name}</p>
                            </div>

                            {/* Email */}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="block p-4 glass rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                                </div>
                                <p className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                    {personalInfo.email}
                                </p>
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="block p-4 glass rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                                </div>
                                <p className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                    {personalInfo.phone}
                                </p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
