import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 3000 }) => {
    const mesh = useRef();

    const [positions, velocities, randomValues] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count);
        const randomValues = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
            velocities[i] = Math.random() * 0.01 + 0.002; // speed
            randomValues[i] = Math.random();
        }

        return [positions, velocities, randomValues];
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            // Move up (Antigravity)
            positions[i * 3 + 1] += velocities[i];

            // Add some horizontal sway
            positions[i * 3] += Math.sin(time * 0.5 + randomValues[i] * 10) * 0.002;

            // Reset if too high
            if (positions[i * 3 + 1] > 10) {
                positions[i * 3 + 1] = -10;
                positions[i * 3] = (Math.random() - 0.5) * 20;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#00d9ff"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Deep space gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0A0E27] to-[#050816]" />

            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>

            {/* Vignette overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(5,8,22,0.8) 100%)',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
