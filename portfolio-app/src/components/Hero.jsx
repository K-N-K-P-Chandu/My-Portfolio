import { personalInfo } from '../data/resumeData';

const Hero = ({ onContactClick, onDownloadResume }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Profile Image */}
                <div className="mb-8 relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="/profile.png"
                        alt={personalInfo.name}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-dark-card shadow-2xl"
                    />
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">
                    {personalInfo.name}
                </h1>
                <h2 className="text-2xl text-gray-300 mb-4">
                    {personalInfo.title}
                </h2>
                <p className="text-blue-400 mb-8">
                    {personalInfo.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <button
                        onClick={onContactClick}
                        className="px-8 py-4 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
                    >
                        Get In Touch
                    </button>

                    <button
                        onClick={onDownloadResume}
                        className="px-8 py-4 bg-gray-800 rounded-lg font-semibold text-white border border-gray-600 hover:bg-gray-700 transition-colors"
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
