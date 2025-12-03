import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
            {/* Deep space gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0A0E27] to-[#050816]" />

            {/* CSS Stars */}
            <div className="absolute inset-0 opacity-50">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            opacity: Math.random(),
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `-${Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Vignette overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(5,8,22,0.8) 100%)',
                }}
            />

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-100vh); }
                }
            `}</style>
        </div>
    );
};

export default AnimatedBackground;
