import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * IconSlideButton
 * Replicates the Framer "Icon Slide Button".
 * - Text shifts left to accommodate the incoming icon.
 * - Icon slides in from the right.
 * - Entire button uses an inset expanding circle fill effect on hover.
 */
const IconSlideButton = ({
    text,
    href,
    onClick,
    className = "",
    variant = 'primary', // 'primary' or 'outline'

    // Custom Overrides
    baseBgColor,
    hoverBgColor,
    baseTextColor,
    hoverTextColor,
    iconColor
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Default themes based on variant
    const styles = {
        primary: {
            baseBg: baseBgColor || 'var(--foreground)',
            hoverBg: hoverBgColor || 'var(--primary, #cc292b)', // Usually red
            baseText: baseTextColor || 'var(--background)',
            hoverText: hoverTextColor || 'var(--background)',
            icon: iconColor || 'var(--background)'
        },
        outline: {
            baseBg: baseBgColor || 'transparent',
            hoverBg: hoverBgColor || 'rgba(var(--foreground-rgb), 0.05)',
            baseText: baseTextColor || 'var(--foreground)',
            hoverText: hoverTextColor || 'var(--foreground)',
            icon: iconColor || 'var(--foreground)',
            border: '1px solid rgba(var(--foreground-rgb), 0.2)'
        }
    };

    const currentTheme = styles[variant];

    return (
        <motion.a
            href={href}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.98 }}
            className={`relative inline-flex items-center justify-center overflow-hidden rounded-full transition-shadow duration-300 ${className}`}
            style={{
                padding: "16px 36px", // Generous base padding
                backgroundColor: currentTheme.baseBg,
                border: currentTheme.border || 'none'
            }}
        >


            {/* Content wrapper masking the sliding elements */}
            <div className="relative z-10 flex items-center justify-center">

                {/* Dynamic Text Container (Shifts left) */}
                <motion.span
                    layout
                    className="relative whitespace-nowrap font-semibold tracking-tight"
                    initial={{ x: 0 }}
                    animate={{
                        x: isHovered ? -8 : 0, // Shift text left when hovered
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        color: currentTheme.baseText // Always keep base text color
                    }}
                >
                    {text}
                </motion.span>

                {/* Slide-In Arrow Icon Container */}
                <motion.div
                    className="absolute right-[-24px] flex items-center justify-center"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{
                        x: isHovered ? -4 : 10,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: currentTheme.icon }}
                >
                    <ArrowRight size={18} strokeWidth={2.5} />
                </motion.div>

            </div>
        </motion.a>
    );
};

export default IconSlideButton;
