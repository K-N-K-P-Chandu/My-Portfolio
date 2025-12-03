import { useState, useEffect } from 'react';

/**
 * Custom hook for cursor-driven parallax effect
 * Tracks mouse position and calculates offset for background layers
 * Respects prefers-reduced-motion accessibility setting
 * 
 * @param {number} intensity - Multiplier for parallax effect (default: 1)
 * @returns {Object} - { x, y } offset values for parallax layers
 */
export const useParallax = (intensity = 1) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let rafId;
        let lastTime = 0;
        const throttleMs = 16; // ~60fps

        const handleMouseMove = (e) => {
            const now = Date.now();

            if (now - lastTime < throttleMs) return;
            lastTime = now;

            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                // Calculate position as percentage from center (-0.5 to 0.5)
                const x = (e.clientX / window.innerWidth - 0.5) * intensity;
                const y = (e.clientY / window.innerHeight - 0.5) * intensity;

                setMousePosition({ x, y });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [intensity, prefersReducedMotion]);

    return prefersReducedMotion ? { x: 0, y: 0 } : mousePosition;
};

/**
 * Hook for smooth scroll to section with hash update
 */
export const useScrollTo = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL hash without triggering scroll
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return scrollToSection;
};
