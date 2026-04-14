import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingShapes from './FloatingShapes';
import ParticleField from './ParticleField';

export function Scene3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]} // Pixel ratio for performance
            >
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.3} />

                    {/* Directional light */}
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    {/* Point lights for color */}
                    <pointLight position={[-10, -10, -5]} color="#22d3ee" intensity={2} />
                    <pointLight position={[10, 10, 5]} color="#a855f7" intensity={2} />

                    {/* 3D Components */}
                    <FloatingShapes />
                    <ParticleField />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Scene3D;
