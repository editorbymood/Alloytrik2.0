import { useMemo } from 'react';

/**
 * AnimatedArcGallery evaluates items into a circular trajectory and spins them.
 * Heavily refactored from the Framer asset to use Frame-perfect CSS animations,
 * ensuring the cards never drift or lose their upright orientation.
 */
export default function AnimatedArcGallery({
    items = [],
    renderItem,
    radius = 350,
    rotationSpeed = 60,
    arcAngle = 360,
    itemWidth = 280,
    itemHeight = 320,
    reverseDirection = false,
    className = ""
}) {
    // Calculate positions for each item on the circle radially
    const itemPositions = useMemo(() => {
        return items.map((_, index) => {
            const angleInRadians = (arcAngle / items.length) * index * (Math.PI / 180);
            const x = radius * Math.cos(angleInRadians);
            const y = radius * Math.sin(angleInRadians);
            return { x, y };
        });
    }, [items.length, radius, arcAngle]);

    // Dimensions to prevent clipping
    const paddingBuffer = Math.max(itemWidth, itemHeight);
    const totalContainerSize = radius * 2 + paddingBuffer;

    const parentAnimationName = reverseDirection ? 'spinGalleryReverse' : 'spinGallery';
    const childAnimationName = reverseDirection ? 'spinGallery' : 'spinGalleryReverse';

    return (
        <>
            <style>
                {`
          @keyframes spinGallery {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spinGalleryReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .gallery-parent {
            animation: ${parentAnimationName} ${rotationSpeed}s linear infinite;
          }
          .gallery-child {
            animation: ${childAnimationName} ${rotationSpeed}s linear infinite;
          }
        `}
            </style>

            <div
                className={`relative flex justify-center items-center overflow-visible scale-75 md:scale-100 ${className}`}
                style={{
                    width: totalContainerSize,
                    height: totalContainerSize,
                }}
            >
                {/* Rotating Parent */}
                <div
                    className="relative gallery-parent"
                    style={{
                        width: radius * 2,
                        height: radius * 2,
                    }}
                >
                    {itemPositions.map((pos, index) => (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                width: itemWidth,
                                height: itemHeight,
                                left: '50%',
                                top: '50%',
                                marginLeft: -itemWidth / 2,
                                marginTop: -itemHeight / 2,
                                transform: `translate(${pos.x}px, ${pos.y}px)`,
                            }}
                        >
                            {/* Counter-Rotating Child ensures cards stay totally upright */}
                            <div className="w-full h-full pointer-events-auto gallery-child">
                                {renderItem ? renderItem(items[index], index) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
