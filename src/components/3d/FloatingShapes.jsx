import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, geometry, color, scale = 1 }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Auto rotation
            meshRef.current.rotation.x += 0.001;
            meshRef.current.rotation.y += 0.002;

            // Mouse interaction
            const mouseX = state.mouse.x * 2;
            const mouseY = state.mouse.y * 2;

            meshRef.current.position.x += (mouseX - meshRef.current.position.x) * 0.02;
            meshRef.current.position.y += (mouseY - meshRef.current.position.y) * 0.02;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <mesh
                ref={meshRef}
                position={position}
                scale={hovered ? scale * 1.2 : scale}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {geometry}
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

export function FloatingShapes() {
    const shapes = [
        {
            position: [-3, 2, -2],
            geometry: <icosahedronGeometry args={[0.8, 0]} />,
            color: '#22d3ee',
            scale: 1
        },
        {
            position: [3, -2, -3],
            geometry: <torusGeometry args={[0.6, 0.25, 16, 32]} />,
            color: '#a855f7',
            scale: 1
        },
        {
            position: [-2, -1.5, -1],
            geometry: <octahedronGeometry args={[0.7]} />,
            color: '#ec4899',
            scale: 1
        },
        {
            position: [2.5, 1.5, -2.5],
            geometry: <boxGeometry args={[0.8, 0.8, 0.8]} />,
            color: '#3b82f6',
            scale: 1
        },
        {
            position: [0, 2.5, -4],
            geometry: <sphereGeometry args={[0.5, 32, 32]} />,
            color: '#8b5cf6',
            scale: 1.2
        },
        {
            position: [-3.5, -0.5, -3],
            geometry: <tetrahedronGeometry args={[0.7]} />,
            color: '#06b6d4',
            scale: 0.8
        }
    ];

    return (
        <group>
            {shapes.map((shape, index) => (
                <FloatingShape
                    key={index}
                    position={shape.position}
                    geometry={shape.geometry}
                    color={shape.color}
                    scale={shape.scale}
                />
            ))}
        </group>
    );
}

export default FloatingShapes;
