import { pipeline } from '@xenova/transformers';
import * as resumeData from '../data/resumeData';

// Configuration
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2'; // Lightweight embedding model
const SIMILARITY_THRESHOLD = 0.15; // Lowered threshold for broader matching
const KEYWORD_BOOST = 0.3; // High boost for exact keyword matches

let extractor = null;
let resumeEmbeddings = [];

/**
 * Simple Levenshtein distance for fuzzy keyword matching
 * Returns true if a word is within 'maxDistance' edit distance of target
 */
const fuzzyMatch = (input, target, maxDistance = 2) => {
    if (!input || !target) return false;
    const cleanInput = input.trim().toLowerCase();
    const cleanTarget = target.trim().toLowerCase();

    // Exact match optimization
    if (cleanInput === cleanTarget) return true;
    // Substring check (if sufficient length)
    if (cleanTarget.length > 3 && cleanInput.includes(cleanTarget)) return true;
    if (cleanInput.length > 3 && cleanTarget.includes(cleanInput)) return true;

    if (Math.abs(cleanInput.length - cleanTarget.length) > maxDistance) return false;

    // Wagner-Fischer algorithm
    const m = cleanInput.length;
    const n = cleanTarget.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = cleanInput[i - 1] === cleanTarget[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      // deletion
                dp[i][j - 1] + 1,      // insertion
                dp[i - 1][j - 1] + cost // substitution
            );
        }
    }

    return dp[m][n] <= maxDistance;
};

/**
 * Prepares the resume data into granular, searchable chunks.
 */
const prepareResumeChunks = () => {
    const chunks = [];

    // --- 1. SPECIAL QA PAIRS (For direct questions) ---
    // Identity & Contact
    chunks.push({
        text: `My name is ${resumeData.personalInfo.name}. I am a ${resumeData.personalInfo.title}.`,
        metadata: 'Identity',
        keywords: ['name', 'who are you', 'role', 'title']
    });
    chunks.push({
        text: `You can contact me via Phone: ${resumeData.personalInfo.phone}, Email: ${resumeData.personalInfo.email}, or LinkedIn: ${resumeData.personalInfo.linkedin}.`,
        metadata: 'Contact',
        keywords: ['contact', 'email', 'phone', 'linkedin', 'reach', 'mobile', 'address']
    });

    // Summary
    chunks.push({
        text: resumeData.summary,
        metadata: 'Summary',
        keywords: ['summary', 'about', 'profile', 'bio', 'introduction']
    });

    // --- 2. SKILLS (Granular) ---
    if (resumeData.skills) {
        Object.entries(resumeData.skills).forEach(([category, items]) => {
            // Category-level chunk
            chunks.push({
                text: `I am skilled in ${category}, specifically: ${items.join(', ')}.`,
                metadata: 'Skills',
                keywords: ['skills', 'technologies', 'stack', category.toLowerCase(), ...items.map(i => i.toLowerCase())]
            });

            // Individual skill chunks for precision
            items.forEach(skill => {
                chunks.push({
                    text: `I have experience with ${skill} as part of my ${category} stack.`,
                    metadata: `Skill - ${skill}`,
                    keywords: [skill.toLowerCase(), 'know', 'knowledge', 'proficiency']
                });
            });
        });
    }

    // --- 3. EXPERIENCE (Granular) ---
    if (resumeData.experience) {
        // Explicit "Years of Experience" chunk
        chunks.push({
            text: `I have 5+ years of experience as a Data Engineer, developing and optimizing end-to-end data solutions on AWS, GCP, and Azure.`,
            metadata: 'Years of Experience',
            keywords: ['years', 'experience', 'long', 'seniority', 'history', 'duration']
        });

        // General Experience Answer
        const companyNames = resumeData.experience.map(e => e.company).join(', ');
        chunks.push({
            text: `I have professional experience working at: ${companyNames}.`,
            metadata: 'Experience Overview',
            keywords: ['experience', 'work', 'history', 'companies', 'jobs', 'employment', 'where']
        });

        resumeData.experience.forEach(job => {
            // Role & Tenure chunk
            chunks.push({
                text: `I worked at ${job.company} as a ${job.position} from ${job.period}. Location: ${job.location}.`,
                metadata: `Experience - ${job.company}`,
                keywords: [job.company.toLowerCase(), 'experience', 'job', 'role', 'work', 'position']
            });

            // Responsibility chunks (Grouped by 2s to keep context but be specific)
            for (let i = 0; i < job.responsibilities.length; i += 2) {
                const combined = job.responsibilities[i] + (job.responsibilities[i + 1] ? " " + job.responsibilities[i + 1] : "");
                chunks.push({
                    text: `At ${job.company}, I ${combined}`,
                    metadata: `Responsibilities - ${job.company}`,
                    keywords: [job.company.toLowerCase(), 'responsibilities', 'project', 'work', 'did']
                });
            }
        });
    }

    // --- 4. EDUCATION ---
    if (resumeData.education) {
        resumeData.education.forEach(edu => {
            chunks.push({
                text: `I hold a ${edu.degree} from ${edu.institution} in ${edu.location}.`,
                metadata: 'Education',
                keywords: ['education', 'degree', 'university', 'college', 'school', 'study', 'graduated', 'master', 'bachelor']
            });
        });
    }

    // --- 5. CERTIFICATIONS ---
    if (resumeData.certifications) {
        resumeData.certifications.forEach(cert => {
            chunks.push({
                text: `I am certified in ${cert.title} by ${cert.issuer} (${cert.date}).`,
                metadata: 'Certifications',
                keywords: ['certification', 'certificate', 'certified', cert.title.toLowerCase()]
            });
        });
    }

    return chunks;
};

/**
 * Calculates cosine similarity between two vectors.
 */
const cosineSimilarity = (a, b) => {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        magnitudeA += a[i] * a[i];
        magnitudeB += b[i] * b[i];
    }
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);
    return dotProduct / (magnitudeA * magnitudeB);
};

export const aiService = {
    isInitialized: false,
    isFallbackMode: false,

    async init() {
        if (this.isInitialized) return;

        try {
            console.log('Loading AI Model...');
            extractor = await pipeline('feature-extraction', MODEL_NAME, {
                quantized: true,
            });
            console.log('Model loaded.');
        } catch (error) {
            console.warn('Failed to load AI model, falling back to keyword search.', error);
            this.isFallbackMode = true;
        }

        try {
            console.log('Indexing data...');
            const chunks = prepareResumeChunks();

            // Generate embeddings only if model matched
            for (const chunk of chunks) {
                if (!this.isFallbackMode && extractor) {
                    try {
                        const output = await extractor(chunk.text, { pooling: 'mean', normalize: true });
                        chunk.embedding = output.data;
                    } catch (e) {
                        console.warn('Failed to embed chunk:', chunk.metadata);
                    }
                }
                resumeEmbeddings.push(chunk);
            }

            this.isInitialized = true;
            console.log(`AI Service Initialized with ${resumeEmbeddings.length} chunks. Fallback Mode: ${this.isFallbackMode}`);
        } catch (error) {
            console.error('Failed to initialize AI Service:', error);
            throw error;
        }
    },

    async query(userQuery) {
        if (!this.isInitialized) {
            await this.init();
        }

        try {
            const lowerQuery = userQuery.toLowerCase().trim();
            const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 2); // Split and filter short words

            let queryEmbedding = null;
            if (!this.isFallbackMode && extractor) {
                try {
                    const output = await extractor(userQuery, { pooling: 'mean', normalize: true });
                    queryEmbedding = output.data;
                } catch (e) {
                    console.warn('Failed to embed query, using keywords only.');
                    queryEmbedding = null;
                }
            }

            // Compute Scores
            const scoredChunks = resumeEmbeddings.map(chunk => {
                let cosine = 0;
                if (queryEmbedding && chunk.embedding) {
                    cosine = cosineSimilarity(queryEmbedding, chunk.embedding);
                }

                // Fuzzy Keyword match logic
                let keywordMatchScore = 0;

                if (chunk.keywords) {
                    let matchesFound = 0;

                    for (const qWord of queryWords) {
                        const hasMatch = chunk.keywords.some(k => fuzzyMatch(qWord, k, 2));
                        if (hasMatch) matchesFound++;
                    }

                    if (matchesFound > 0) {
                        keywordMatchScore = 0.25 * matchesFound;

                        // Boost for "experience" queries
                        if (fuzzyMatch(lowerQuery, 'experience', 2)) {
                            // Boost if chunk is about years of experience or general overview
                            if (chunk.keywords.includes('years') || chunk.metadata === 'Experience Overview') {
                                keywordMatchScore += 0.4;
                            }
                            // Boost specific company chunks too if query mentions 'work' or 'jobs'
                            if (chunk.metadata.startsWith('Experience -') && (lowerQuery.includes('work') || lowerQuery.includes('job'))) {
                                keywordMatchScore += 0.2;
                            }
                        }
                    }
                }

                // Cap total boost
                if (keywordMatchScore > 0.9) keywordMatchScore = 0.9;

                // If in fallback mode, we rely purely on keyword score. 
                // We give it a base boost so it crosses thresholds easily if matched.
                let finalScore = cosine + keywordMatchScore;
                if (this.isFallbackMode) {
                    finalScore = keywordMatchScore;
                }

                return {
                    ...chunk,
                    originalScore: cosine,
                    score: finalScore
                };
            });

            // Sort by score
            scoredChunks.sort((a, b) => b.score - a.score);

            const bestMatch = scoredChunks[0];
            const runnerUp = scoredChunks[1];

            console.log('Query:', userQuery);
            console.log('Best match:', bestMatch.metadata, 'Score:', bestMatch.score.toFixed(3));

            // Guardrails
            // In fallback mode, we might need a slightly different threshold or trust matches > 0
            const threshold = this.isFallbackMode ? 0.2 : SIMILARITY_THRESHOLD;

            if (bestMatch.score < threshold) {
                return {
                    answer: "I used my internal knowledge base but couldn't find a direct answer. Please ask specifically about my Skills (e.g., Python, AWS), Experience (e.g., TCS, Meta), or Contact info.",
                    isFallback: true
                };
            }

            // Intelligent Result Formatting
            let finalAnswer = bestMatch.text;

            if (runnerUp &&
                runnerUp.score > (bestMatch.score - 0.2) && // Relaxed diff
                runnerUp.score > threshold &&
                runnerUp.metadata !== bestMatch.metadata &&
                !runnerUp.metadata.includes('Overview') &&
                !bestMatch.metadata.includes('Overview')
            ) {
                if ((finalAnswer.length + runnerUp.text.length) < 800) {
                    finalAnswer += "\n\n" + runnerUp.text;
                }
            }

            return {
                answer: finalAnswer,
                metadata: bestMatch.metadata,
                score: bestMatch.score,
                isFallback: false
            };

        } catch (error) {
            console.error('Query failed:', error);
            return {
                answer: "I encountered an error while processing your request.",
                isFallback: true
            };
        }
    }
};
