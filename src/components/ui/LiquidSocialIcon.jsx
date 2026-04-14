import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LiquidSocialIcon
 * Implements the "Liquid Navigation" Framer component design.
 * Features an expanding pill that reveals text on hover with a smooth spring bounce.
 */
const LiquidSocialIcon = ({ icon, name, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center h-10 rounded-full bg-foreground/5 text-muted-foreground hover:text-foreground hover:bg-foreground/10 border border-transparent hover:border-border transition-colors duration-300 overflow-hidden cursor-pointer"
            // The Framer spring config for the expanding pill
            layout
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            style={{
                boxShadow: isHovered
                    ? '0px 2px 4.7px -2.6px rgba(0, 0, 0, 0.17), 0px 8px 20.8px -4px rgba(0, 0, 0, 0.05), inset 0px 0px 4px 2px rgba(255, 255, 255, 0.05)'
                    : 'none'
            }}
        >
            <motion.div layout className="flex items-center justify-center w-10 h-10 flex-shrink-0 relative z-10">
                {icon}
            </motion.div>

            <AnimatePresence mode="popLayout">
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, width: 0, paddingRight: 0 }}
                        animate={{ opacity: 1, width: 'auto', paddingRight: 16 }}
                        exit={{ opacity: 0, width: 0, paddingRight: 0 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                        className="flex items-center whitespace-nowrap overflow-hidden relative z-10"
                    >
                        <span className="text-sm font-semibold tracking-wide" style={{ transform: "skewX(-5deg)" }}>
                            {name}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.a>
    );
};

export default LiquidSocialIcon;
