import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

/**
 * Main App Component
 * Orchestrates all sections and manages global state
 */
function App() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    /**
     * Download resume PDF
     * In production, this would download the actual resume file
     * Currently shows alert as placeholder
     */
    const handleDownloadResume = () => {
        // Create a link to download the resume
        // In production, place resume.pdf in the /public folder
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Path to resume in public folder
        link.download = 'Naga_Krishna_Poorna_Chandu_Kovelamudi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Fallback alert if file doesn't exist
        console.log('Resume download initiated');
        console.log('Note: Place resume.pdf in the /public folder for actual download');
    };

    return (
        <div className="relative min-h-screen">
            {/* Animated Parallax Background */}
            <AnimatedBackground />

            {/* Main Content - positioned above background */}
            <div className="relative z-10">
                {/* Navigation */}
                <Navigation />

                {/* Main Sections */}
                <main>
                    <Hero
                        onContactClick={() => setIsContactModalOpen(true)}
                        onDownloadResume={handleDownloadResume}
                    />
                    <About />
                    <Experience />
                    <Certifications />
                    <Skills />
                </main>

                {/* Footer */}
                <Footer
                    onContactClick={() => setIsContactModalOpen(true)}
                    onDownloadResume={handleDownloadResume}
                />
            </div>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
}

export default App;
