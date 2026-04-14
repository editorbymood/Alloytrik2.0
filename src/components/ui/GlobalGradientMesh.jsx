import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const GlobalGradientMesh = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
            {/* 
              Base Gradient Layer 
              A blend of dominant White/Off-White (#f2f2f2) or Black (#050505), striking Red (#cc292b), 
              and deep shadows of Black (#111111).
              Using CSS animations to slowly shift the gradients.
            */}
            <div
                className="absolute inset-0 transition-colors duration-1000"
                style={{ backgroundColor: isDark ? '#050505' : '#ffffff' }}
            >
                <div
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                        opacity: isDark ? 0.4 : 0.7,
                        mixBlendMode: isDark ? 'screen' : 'multiply',
                        background: `
                            radial-gradient(circle at 15% 50%, rgba(204, 41, 43, 0.15) 0%, transparent 60%),
                            radial-gradient(circle at 85% 30%, rgba(204, 41, 43, 0.1) 0%, transparent 60%),
                            radial-gradient(circle at 50% 100%, rgba(204, 41, 43, 0.05) 0%, transparent 70%)
                        `,
                        filter: 'blur(80px)'
                    }}
                />
                <div
                    className="absolute inset-0 animate-pulse-slow transition-opacity duration-1000"
                    style={{
                        opacity: isDark ? 0.2 : 0.5,
                        mixBlendMode: 'overlay',
                        background: `
                            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, ${isDark ? '0.4' : '0.9'}) 0%, transparent 80%)
                        `
                    }}
                />
            </div>

            {/* 
              Cinematic SVG Noise/Grain Overlay
              Generates a fractal noise map and overlays it to give the gradient a physical, printed or filmic texture.
            */}
            <div className="absolute inset-0 opacity-[0.06] mix-blend-color-burn pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="3"
                            stitchTiles="stitch" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.5 0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Custom Animation defined inline or in global CSS */}
            <style jsx>{`
                @keyframes slowPulse {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
                    50% { transform: scale(1.05) translate(-2%, 2%); opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: slowPulse 15s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default GlobalGradientMesh;
