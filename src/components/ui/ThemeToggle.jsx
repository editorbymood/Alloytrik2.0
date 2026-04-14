import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    // Sun rays configuration
    const rays = Array.from({ length: 8 }, (_, i) => ({
        rotate: i * 45,
        delay: i * 0.03,
    }));

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer outline-none border-0 bg-transparent group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Hover glow ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                    background: isDark
                        ? 'radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                }}
            />

            {/* Background pill */}
            <motion.div
                className="absolute inset-0.5 rounded-full"
                animate={{
                    backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.05)',
                    borderColor: isDark
                        ? 'rgba(255, 255, 255, 0.12)'
                        : 'rgba(0, 0, 0, 0.1)',
                }}
                style={{ border: '1px solid' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            <div className="relative w-5 h-5">
                <AnimatePresence mode="wait">
                    {isDark ? (
                        /* ===== MOON ===== */
                        <motion.div
                            key="moon"
                            className="absolute inset-0"
                            initial={{ rotate: -90, scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: 90, scale: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Moon body */}
                                <motion.path
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    fill="#e2e8f0"
                                    stroke="#94a3b8"
                                    strokeWidth="0.5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                />
                                {/* Stars */}
                                <motion.circle
                                    cx="19" cy="5" r="0.8"
                                    fill="#fbbf24"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                />
                                <motion.circle
                                    cx="15" cy="3" r="0.5"
                                    fill="#fbbf24"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                />
                                <motion.circle
                                    cx="21" cy="9" r="0.5"
                                    fill="#fbbf24"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                />
                            </svg>
                        </motion.div>
                    ) : (
                        /* ===== SUN ===== */
                        <motion.div
                            key="sun"
                            className="absolute inset-0"
                            initial={{ rotate: 90, scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: -90, scale: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Sun core */}
                                <motion.circle
                                    cx="12" cy="12" r="4.5"
                                    fill="#f59e0b"
                                    initial={{ r: 0 }}
                                    animate={{ r: 4.5 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                />
                                {/* Sun rays */}
                                {rays.map(({ rotate, delay }, i) => (
                                    <g key={i} transform={`rotate(${rotate} 12 12)`}>
                                        <motion.line
                                            x1="12" y1="2.5"
                                            x2="12" y2="5"
                                            stroke="#f59e0b"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            initial={{ opacity: 0, pathLength: 0 }}
                                            animate={{ opacity: 1, pathLength: 1 }}
                                            transition={{ delay: delay + 0.15, duration: 0.25, ease: 'easeOut' }}
                                        />
                                    </g>
                                ))}
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
