import { useParallax } from '../hooks/useParallax';

/**
 * AnimatedBackground component
 * Creates multi-layer parallax background with geometric shapes
 * Layers move at different speeds based on cursor position
 * Implements depth effect with varying opacity and blur
 */
const AnimatedBackground = () => {
    // Different intensity levels for depth effect
    const layer1 = useParallax(20);  // Closest layer - moves most
    const layer2 = useParallax(40);  // Middle layer
    const layer3 = useParallax(60);  // Far layer - moves least

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none noise-bg" style={{ zIndex: 0 }}>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />

            {/* Parallax Layer 1 - Closest */}
            <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                    transform: `translate(${layer1.x * 50}px, ${layer1.y * 50}px)`,
                }}
            >
                {/* Large circle - top right */}
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,217,255,0.4) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Medium circle - bottom left */}
                <div
                    className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            {/* Parallax Layer 2 - Middle */}
            <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                    transform: `translate(${layer2.x * 30}px, ${layer2.y * 30}px)`,
                }}
            >
                {/* Geometric shapes */}
                <div
                    className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,217,255,0.3) 0%, transparent 100%)',
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        filter: 'blur(20px)',
                    }}
                />

                <div
                    className="absolute bottom-1/3 left-1/3 w-72 h-72 opacity-5"
                    style={{
                        background: 'linear-gradient(225deg, rgba(123,97,255,0.3) 0%, transparent 100%)',
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                        filter: 'blur(20px)',
                    }}
                />
            </div>

            {/* Parallax Layer 3 - Farthest */}
            <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                    transform: `translate(${layer3.x * 15}px, ${layer3.y * 15}px)`,
                }}
            >
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '100px 100px',
                    }}
                />

                {/* Scattered dots */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary opacity-20"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Vignette effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(10,14,39,0.8) 100%)',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
