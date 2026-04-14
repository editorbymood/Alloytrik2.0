import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GridTextCursorTrail({
    text = "AlloyTrik ",
    gridSize = 70,
    trailLength = 15,
    customColors = ['#cc292b', '#ffffff', '#333333', '#111111', '#555555'],
    cornerRadius = 12,
    trailDuration = 0.8,
    font = {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter, sans-serif'
    },
    textColor = "#ffffff",
    style = {}
}) {
    const containerRef = useRef(null);
    const [trail, setTrail] = useState([]);
    const lastPos = useRef({ x: -1, y: -1 });
    const lastMoveTime = useRef(0);
    const uniqueId = useRef(0);
    const charIndexCounter = useRef(0);

    // Process text for sequential display 
    const chars = useMemo(() => {
        if (!text) return [" "];
        const processed = text.replace(/\\n/g, "\n");
        return processed.split("");
    }, [text]);

    const handleMouseMove = useCallback(e => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Calculate relative position within the container
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        // Ensure we are inside the container bounds loosely (adding a small buffer)
        if (clientX < -gridSize || clientX > rect.width + gridSize ||
            clientY < -gridSize || clientY > rect.height + gridSize) {
            return;
        }

        const x = Math.floor(clientX / gridSize);
        const y = Math.floor(clientY / gridSize);
        const now = Date.now();

        if (x !== lastPos.current.x || y !== lastPos.current.y) {
            lastPos.current = { x, y };

            // If it's been a short pause since the last grid move, reset the sequence
            if (now - lastMoveTime.current > 300) {
                charIndexCounter.current = 0;
            }
            lastMoveTime.current = now;

            const currentSeq = charIndexCounter.current++;
            const id = uniqueId.current++;
            const charIndex = currentSeq % chars.length;
            const colorIndex = customColors?.length > 0 ? currentSeq % customColors.length : 0;

            setTrail(prev => {
                const newTrail = [...prev, { x, y, id, charIndex, colorIndex, createdAt: now }];
                if (newTrail.length > trailLength) {
                    return newTrail.slice(newTrail.length - trailLength);
                }
                return newTrail;
            });
        } else {
            // Keep the timer fresh if we're moving but just haven't crossed a grid cell
            lastMoveTime.current = now;
        }
    }, [gridSize, trailLength, chars, customColors]);

    // Lifetime System: Automatically remove items after their lifetime
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrail(prev => {
                const filtered = prev.filter(item => now - item.createdAt < trailDuration * 1000);
                if (filtered.length !== prev.length) return filtered;
                return prev;
            });
        }, 50);
        return () => clearInterval(interval);
    }, [trailDuration]);

    // Event listener management
    useEffect(() => {
        const target = containerRef.current;
        if (!target) return;

        target.addEventListener("mousemove", handleMouseMove);
        // Also listen on window if scrolling or fast movements occur, passing container relative events
        const handleWindowMove = (e) => {
            // Only fire if the mouse is over the hero section roughly
            if (target.contains(e.target)) {
                handleMouseMove(e);
            }
        }
        window.addEventListener("mousemove", handleWindowMove);

        return () => {
            target.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousemove", handleWindowMove);
        };
    }, [handleMouseMove]);

    const containerStyle = {
        ...style,
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // Keep it behind main content
        pointerEvents: "auto", // Needs to capture mouse events
    };

    return (
        <div ref={containerRef} style={containerStyle} className="grid-cursor-trail-container">
            <AnimatePresence>
                {trail.map((item, index) => {
                    // Opacity calculation based on trail order
                    const opacity = (index + 1) / (trail.length || 1);
                    const char = chars[item.charIndex];
                    const bgColor = customColors?.length > 0 ? customColors[item.colorIndex] : 'transparent';

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.2, rotate: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{
                                position: "absolute",
                                left: item.x * gridSize,
                                top: item.y * gridSize,
                                width: gridSize,
                                height: gridSize,
                                backgroundColor: bgColor,
                                borderRadius: cornerRadius,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                pointerEvents: "none",
                                ...font,
                                color: textColor,
                                lineHeight: 1,
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <span style={{
                                display: "block",
                                whiteSpace: "pre-wrap",
                                textAlign: "center",
                                lineHeight: "1em"
                            }}>
                                {char === "\\n" ? <br /> : char}
                            </span>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
