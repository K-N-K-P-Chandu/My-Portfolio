import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';

/**
 * Contact Modal component
 * Features form validation, success/error states, and accessibility
 * Logs submission to console (integration point for real email/API)
 */
const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const modalRef = useRef(null);

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

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Log submission to console (integration point for real email/API)
            console.log('=== CONTACT FORM SUBMISSION ===');
            console.log('Name:', formData.name);
            console.log('Email:', formData.email);
            console.log('Message:', formData.message);
            console.log('Timestamp:', new Date().toISOString());
            console.log('==============================');

            // TODO: Integrate with email service or API
            // Example integration points:
            // - EmailJS: emailjs.send('service_id', 'template_id', formData)
            // - SendGrid: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) })
            // - Formspree: fetch('https://formspree.io/f/your-form-id', { method: 'POST', body: JSON.stringify(formData) })

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Auto-close after success
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

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
                    className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h2 id="contact-modal-title" className="text-3xl font-bold gradient-text mb-2">
                                    Get In Touch
                                </h2>
                                <p className="text-gray-400">
                                    Let's discuss how we can work together
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Close contact form"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-3 p-4 glass rounded-lg hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-400 mb-1">Email</p>
                                    <p className="text-sm text-white truncate">{personalInfo.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-3 p-4 glass rounded-lg hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-400 mb-1">Phone</p>
                                    <p className="text-sm text-white truncate">{personalInfo.phone}</p>
                                </div>
                            </a>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.name
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-primary/20 focus:ring-primary focus:border-primary'
                                        }`}
                                    placeholder="John Doe"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && (
                                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.email
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-primary/20 focus:ring-primary focus:border-primary'
                                        }`}
                                    placeholder="john@example.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && (
                                    <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-primary/20 focus:ring-primary focus:border-primary'
                                        }`}
                                    placeholder="Tell me about your project or opportunity..."
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                />
                                {errors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success/Error Toast */}
                        <AnimatePresence>
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                            ? 'bg-green-500/10 border border-green-500/50 text-green-400'
                                            : 'bg-red-500/10 border border-red-500/50 text-red-400'
                                        }`}
                                    role="alert"
                                >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <p className="font-semibold">Message sent successfully! I'll get back to you soon.</p>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <p className="font-semibold">Failed to send message. Please try again or email directly.</p>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
