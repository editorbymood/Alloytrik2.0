import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

/**
 * InteractiveButton
 * Recreated native React Neumorphism Button based on the user's Framer component design.
 * Adapts the exact inset/box-shadow physics to match our premium aesthetic.
 */
const InteractiveButton = ({
    children,
    href,
    onClick,
    className = "",
    fullWidth = false
}) => {
    const isLink = Boolean(href);
    const Component = isLink ? motion.a : motion.button;

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = mounted && resolvedTheme === 'dark';

    // Dark Neumorphism Styles based on the original light-mode physics
    const lightRestShadow = `
    7px 6px 10px 0px rgba(0, 0, 0, 0.4),
    -0.4px -0.4px 2.8px -0.8px rgba(255, 255, 255, 0.05),
    -1.2px -1.2px 8.5px -1.7px rgba(255, 255, 255, 0.04),
    -3.2px -3.2px 22.5px -2.6px rgba(255, 255, 255, 0.03),
    -10px -10px 70px -3.5px rgba(255, 255, 255, 0.02)
  `;

    const lightActiveShadow = `
    inset 2px 1px 3px 1px rgba(0, 0, 0, 0.5),
    inset -1px -1px 4px 0px rgba(255, 255, 255, 0.1)
  `;

    const darkRestShadow = `
    7px 6px 10px 0px rgba(0, 0, 0, 0.6),
    -0.4px -0.4px 2.8px -0.8px rgba(255, 255, 255, 0.1),
    -1.2px -1.2px 8.5px -1.7px rgba(255, 255, 255, 0.08),
    -3.2px -3.2px 22.5px -2.6px rgba(255, 255, 255, 0.06),
    -10px -10px 70px -3.5px rgba(255, 255, 255, 0.04)
  `;

    const darkActiveShadow = `
    inset 2px 1px 3px 1px rgba(0, 0, 0, 0.3),
    inset -1px -1px 4px 0px rgba(255, 255, 255, 0.8)
  `;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`
        relative inline-flex items-center justify-center overflow-hidden
        px-6 py-2.5 font-semibold tracking-wide outline-none 
        select-none no-underline cursor-pointer
        ${fullWidth ? 'w-full py-4 text-base' : 'text-sm'}
        ${className}
      `}
            style={{
                backgroundColor: isDark ? '#ffffff' : '#111111',
                borderRadius: '98px',
                color: isDark ? '#111111' : '#ffffff',
            }}
            initial={{ boxShadow: isDark ? darkRestShadow : lightRestShadow }}
            whileHover={{
                boxShadow: isDark ? darkActiveShadow : lightActiveShadow,
                color: isDark ? '#555555' : '#aaaaaa'
            }}
            whileTap={{
                boxShadow: isDark ? darkActiveShadow : lightActiveShadow,
                scale: 0.98
            }}
            transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            <span className="relative z-10 transition-colors duration-300">
                {children}
            </span>
        </Component>
    );
};

export default InteractiveButton;
