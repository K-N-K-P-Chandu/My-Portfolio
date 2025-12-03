import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { experience } from '../data/resumeData';

/**
 * Experience section component
 * Displays work experience cards with expandable modal for details
 * Implements keyboard navigation and focus trapping for accessibility
 */
const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedExperience, setSelectedExperience] = useState(null);
    const modalRef = useRef(null);

    // Focus trap for modal accessibility
    useEffect(() => {
        if (selectedExperience) {
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
                        setSelectedExperience(null);
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
    }, [selectedExperience]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional <span className="gradient-text">Experience</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </motion.div>

                    {/* Experience Timeline */}
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className="relative"
                            >
                                {/* Timeline connector */}
                                {index < experience.length - 1 && (
                                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
                                )}

                                <div className="glass rounded-xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                                    onClick={() => setSelectedExperience(exp)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && setSelectedExperience(exp)}
                                    aria-label={`View details for ${exp.position} at ${exp.company}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Timeline dot */}
                                        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                        {exp.position}
                                                    </h3>
                                                    <p className="text-lg text-primary font-semibold">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <div className="text-sm text-gray-400 sm:text-right">
                                                    <p className="font-mono">{exp.period}</p>
                                                    <p>{exp.location}</p>
                                                </div>
                                            </div>

                                            {/* Preview of responsibilities */}
                                            <ul className="space-y-2 mb-4">
                                                {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                                                        <span className="line-clamp-2">{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {exp.technologies.slice(0, 6).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {exp.technologies.length > 6 && (
                                                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">
                                                        +{exp.technologies.length - 6} more
                                                    </span>
                                                )}
                                            </div>

                                            {/* View More Button */}
                                            <button
                                                className="text-primary hover:text-primary-light font-semibold flex items-center gap-2 group/btn"
                                                aria-label={`View full details for ${exp.position}`}
                                            >
                                                <span>View Full Details</span>
                                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Experience Detail Modal */}
            <AnimatePresence>
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedExperience(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 id="modal-title" className="text-3xl font-bold text-white mb-2">
                                            {selectedExperience.position}
                                        </h3>
                                        <p className="text-xl text-primary font-semibold mb-1">
                                            {selectedExperience.company}
                                        </p>
                                        <p className="text-gray-400">
                                            {selectedExperience.period} • {selectedExperience.location}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedExperience(null)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Responsibilities */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-white mb-4">Key Responsibilities & Achievements</h4>
                                    <ul className="space-y-3">
                                        {selectedExperience.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-4">Technologies & Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedExperience.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
