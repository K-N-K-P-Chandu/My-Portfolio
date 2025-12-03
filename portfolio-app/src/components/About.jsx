import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { summary, personalInfo } from '../data/resumeData';

/**
 * About section component
 * Displays professional summary with animated entrance
 */
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const stats = [
        { label: 'Years Experience', value: '5+' },
        { label: 'Cloud Platforms', value: '3' },
        { label: 'Certifications', value: '3' },
        { label: 'Projects Delivered', value: '50+' },
    ];

    return (
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image Placeholder */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative aspect-square max-w-md mx-auto">
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-2xl" />

                                {/* Profile container */}
                                <div className="relative w-full h-full glass rounded-2xl overflow-hidden flex items-center justify-center">
                                    {/* Placeholder for profile image - using initials */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-8xl font-bold gradient-text mb-4">NK</div>
                                            <p className="text-xl text-gray-300">{personalInfo.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Summary Text */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Professional Summary
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                {summary}
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
