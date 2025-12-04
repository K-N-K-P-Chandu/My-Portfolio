import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Track mouse position
        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + canvas.height; // Start below or random
                this.size = Math.random() * 2 + 0.5; // Random size
                this.speedY = Math.random() * 1 + 0.2; // Move up speed
                this.speedX = (Math.random() - 0.5) * 0.5; // Slight drift
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.8 ? '#00d9ff' : '#ffffff'; // Cyan or White

                // Store base position for parallax
                this.baseX = this.x;
                this.baseY = this.y;
            }

            update() {
                // Normal movement
                this.y -= this.speedY;
                this.x += this.speedX;

                // Mouse Interaction (Repulsion)
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    const forceRadius = 150;

                    if (distance < forceRadius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (forceRadius - distance) / forceRadius;
                        const directionX = forceDirectionX * force * 3; // Strength
                        const directionY = forceDirectionY * force * 3;

                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                // Reset if off screen (top)
                if (this.y < -10) {
                    this.y = canvas.height + 10;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth * 0.1, 150); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                const p = new Particle();
                p.y = Math.random() * canvas.height; // Initial random spread
                particles.push(p);
            }
        };

        init();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient background via canvas for better blending
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#050816');
            gradient.addColorStop(0.5, '#0A0E27');
            gradient.addColorStop(1, '#050816');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Connect particles with lines if close (Constellation effect)
            particles.forEach((p1, i) => {
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = p1.color;
                        ctx.globalAlpha = (1 - distance / 100) * 0.15;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: -1 }}
        />
    );
};

export default AnimatedBackground;
