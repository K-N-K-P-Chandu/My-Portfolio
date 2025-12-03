import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../data/resumeData';

/**
 * Skills section component
 * Displays technical skills organized by category with animated tags
 */
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(skills)[0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 },
        },
    };

    const categories = Object.keys(skills);

    return (
        <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Technical <span className="gradient-text">Skills</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Comprehensive expertise across modern data engineering, cloud platforms, and AI/ML technologies
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                                            : 'glass text-gray-300 hover:text-white hover:border-primary/50'
                                        }`}
                                    aria-label={`View ${category} skills`}
                                    aria-pressed={selectedCategory === category}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Display */}
                    <motion.div
                        key={selectedCategory}
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                            {selectedCategory}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {skills[selectedCategory].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={tagVariants}
                                    custom={index}
                                    className="group relative"
                                >
                                    <div className="px-4 py-2 bg-dark-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default">
                                        <span className="text-gray-300 group-hover:text-primary transition-colors">
                                            {skill}
                                        </span>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skill Highlights */}
                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-3 gap-6 mt-12"
                    >
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                ),
                                title: 'Cloud Expertise',
                                description: 'Proficient in AWS, Azure, and GCP with hands-on experience in building scalable cloud solutions',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                                title: 'AI/ML Integration',
                                description: 'Expertise in RAG pipelines, LLMs, and integrating AI into data workflows',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: 'Big Data Processing',
                                description: 'Advanced skills in Spark, Kafka, and building high-performance ETL pipelines',
                            },
                        ].map((highlight, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-primary mb-4">{highlight.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                                <p className="text-gray-400 text-sm">{highlight.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
