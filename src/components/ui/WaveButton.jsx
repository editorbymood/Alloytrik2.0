import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WaveButton
 * Replicates the Framer "Wave Button" (Bottom -> Top fill).
 * When hovered, wave circles scale up from the bottom to fill the button,
 * and the text color contrasts smoothly against the new background.
 */
const WaveButton = ({
  text,
  href,
  onClick,
  className = "",
  // Exposed color overrides allowing it to adapt to current themes
  waveColor1 = "hsl(var(--primary) / 0.4)",
  waveColor2 = "hsl(var(--primary) / 0.7)",
  waveColor3 = "hsl(var(--primary))",
  defaultTextColor = "hsl(var(--muted-foreground))",
  hoverTextColor = "hsl(var(--background))"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full transition-shadow duration-300 ${className}`}
      style={{
        padding: "8px 20px", // Base padding
      }}
    >
      {/* Background container for the waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full">
        {/* Wave 1 */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          initial={{ scale: 0.1, opacity: 0, y: "150%" }}
          animate={{
            scale: isHovered ? 2.5 : 0.1,
            opacity: isHovered ? 1 : 0,
            y: isHovered ? "0%" : "150%"
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          style={{
            backgroundColor: waveColor1,
            width: "120%",
            aspectRatio: "1/1",
            left: "-10%",
            bottom: "-50%",
            transformOrigin: "center bottom"
          }}
        />

        {/* Wave 2 */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          initial={{ scale: 0.1, opacity: 0, y: "150%" }}
          animate={{
            scale: isHovered ? 2.5 : 0.1,
            opacity: isHovered ? 1 : 0,
            y: isHovered ? "0%" : "150%"
          }}
          transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
          style={{
            backgroundColor: waveColor2,
            width: "120%",
            aspectRatio: "1/1",
            left: "-10%",
            bottom: "-50%",
            transformOrigin: "center bottom"
          }}
        />

        {/* Wave 3 - The final solid wave */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          initial={{ scale: 0.1, opacity: 0, y: "150%" }}
          animate={{
            scale: isHovered ? 2.5 : 0.1,
            opacity: isHovered ? 1 : 0,
            y: isHovered ? "0%" : "150%"
          }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          style={{
            backgroundColor: waveColor3,
            width: "120%",
            aspectRatio: "1/1",
            left: "-10%",
            bottom: "-50%",
            transformOrigin: "center bottom"
          }}
        />
      </div>

      {/* Text Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Default Text (crossfades out) */}
        <motion.span
          className="absolute whitespace-pre font-medium text-sm"
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -15 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ color: defaultTextColor }}
        >
          {text}
        </motion.span>

        {/* Hover Text (crossfades in) */}
        <motion.span
          className="relative whitespace-pre font-medium text-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 15
          }}
          transition={{ duration: 0.3 }}
          style={{ color: hoverTextColor }}
        >
          {text}
        </motion.span>
      </div>
    </motion.a>
  );
};

export default WaveButton;
