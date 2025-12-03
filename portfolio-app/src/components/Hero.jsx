import { personalInfo } from '../data/resumeData';

const Hero = ({ onContactClick, onDownloadResume }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h1 className="text-4xl font-bold text-white mb-4">
                    {personalInfo.name}
                </h1>
                <h2 className="text-2xl text-gray-300 mb-4">
                    {personalInfo.title}
                </h2>
                <p className="text-blue-400">
                    {personalInfo.tagline}
                </p>
            </div>
        </section>
    );
};

export default Hero;
