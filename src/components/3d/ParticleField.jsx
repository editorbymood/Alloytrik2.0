import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField() {
    const pointsRef = useRef();
    const particleCount = 2000;

    // Create particle positions
    const particles = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            // Random positions in a sphere
            const i3 = i * 3;
            const radius = 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Color gradient (cyan to purple)
            const colorMix = Math.random();
            colors[i3] = THREE.MathUtils.lerp(0.13, 0.66, colorMix);     // R
            colors[i3 + 1] = THREE.MathUtils.lerp(0.83, 0.33, colorMix); // G
            colors[i3 + 2] = THREE.MathUtils.lerp(0.93, 0.97, colorMix); // B
        }

        return { positions, colors };
    }, [particleCount]);

    // Animate particles
    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = pointsRef.current.geometry.attributes.position.array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const y = positions[i3 + 1];
                const z = positions[i3 + 2];

                // Wave motion
                positions[i3 + 1] = y + Math.sin(time + x * 0.5) * 0.01;
                positions[i3 + 2] = z + Math.cos(time + y * 0.5) * 0.01;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;

            // Rotate the entire particle field slowly
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

export default ParticleField;
