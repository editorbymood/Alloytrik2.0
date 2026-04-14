import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const GlassyButton = ({
    children,
    href,
    onClick,
    className = "",
    fullWidth = false
}) => {
    const isLink = Boolean(href);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = mounted && resolvedTheme === 'dark';

    // Constants mapping to the Framer component
    const defaultShadow = isDark
        ? "0px 1px 0.5px 0px rgba(0,0,0,0), 0.16px 2.39px 1.2px 0px rgba(0,0,0,0), 0.29px 4.36px 2.18px 0px rgba(0,0,0,0.4), 0.48px 7.24px 3.63px 0px rgba(0,0,0,0.5), 0.78px 11.7px 5.86px 0px rgba(0,0,0,0.6), 1.28px 19.15px 9.6px 0px rgba(0,0,0,0.7), 2.2px 32.97px 16.52px 0px rgba(0,0,0,0.8), 4px 60px 30.07px 0px rgba(0,0,0,0.9)"
        : "0px 1px 0.5px 0px rgba(0,0,0,0), 0.16px 2.39px 1.2px 0px rgba(0,0,0,0), 0.29px 4.36px 2.18px 0px rgba(0,0,0,0.01), 0.48px 7.24px 3.63px 0px rgba(0,0,0,0.01), 0.78px 11.7px 5.86px 0px rgba(0,0,0,0.02), 1.28px 19.15px 9.6px 0px rgba(0,0,0,0.03), 2.2px 32.97px 16.52px 0px rgba(0,0,0,0.05), 4px 60px 30.07px 0px rgba(0,0,0,0.1)";

    const pressedShadow = isDark
        ? "0.07px 1px 0.4px -0.38px rgba(0,0,0,0.2), 0.16px 2.39px 0.96px -0.75px rgba(0,0,0,0.3), 0.29px 4.36px 1.75px -1.13px rgba(0,0,0,0.4), 0.48px 7.24px 2.9px -1.5px rgba(0,0,0,0.5), 0.78px 11.7px 4.69px -1.88px rgba(0,0,0,0.5), 1.28px 19.15px 7.68px -2.25px rgba(0,0,0,0.5), 2.2px 32.97px 13.22px -2.63px rgba(0,0,0,0.4), 4px 60px 24.05px -3px rgba(0,0,0,0.4)"
        : "0.07px 1px 0.4px -0.38px rgba(0,0,0,0.03), 0.16px 2.39px 0.96px -0.75px rgba(0,0,0,0.03), 0.29px 4.36px 1.75px -1.13px rgba(0,0,0,0.03), 0.48px 7.24px 2.9px -1.5px rgba(0,0,0,0.03), 0.78px 11.7px 4.69px -1.88px rgba(0,0,0,0.03), 1.28px 19.15px 7.68px -2.25px rgba(0,0,0,0.03), 2.2px 32.97px 13.22px -2.63px rgba(0,0,0,0.02), 4px 60px 24.05px -3px rgba(0,0,0,0.02)";

    const outerVariants = {
        initial: {
            boxShadow: defaultShadow,
            scale: 1,
        },
        hover: {
            boxShadow: defaultShadow,
            scale: 1.02,
        },
        pressed: {
            boxShadow: pressedShadow,
            scale: 0.95,
        }
    };

    const innerVariants = {
        initial: {
            background: isDark
                ? "linear-gradient(150deg, rgb(30, 30, 30) 0%, rgb(40, 40, 40) 50%, rgb(20, 20, 20) 100%)"
                : "linear-gradient(150deg, rgb(208, 208, 208) 0%, rgb(204, 204, 204) 50%, rgb(200, 200, 200) 100%)",
        },
        hover: {
            background: isDark
                ? "linear-gradient(150deg, rgb(40, 40, 40) 0%, rgb(50, 50, 50) 50%, rgb(30, 30, 30) 100%)"
                : "linear-gradient(150deg, rgb(208, 208, 208) 0%, rgb(232, 232, 232) 50%, rgb(200, 200, 200) 100%)",
        },
        pressed: {
            background: isDark
                ? "linear-gradient(150deg, rgb(40, 40, 40) 0%, rgb(50, 50, 50) 50%, rgb(30, 30, 30) 100%)"
                : "linear-gradient(150deg, rgb(208, 208, 208) 0%, rgb(232, 232, 232) 50%, rgb(200, 200, 200) 100%)",
        }
    };

    const Container = isLink ? motion.a : motion.button;

    return (
        <Container
            href={href}
            onClick={onClick}
            initial="initial"
            whileHover="hover"
            whileTap="pressed"
            variants={outerVariants}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            className={`relative inline-flex flex-col items-center justify-center overflow-hidden cursor-pointer ${fullWidth ? 'w-full' : ''} ${className}`}
            style={{
                padding: "3px",
                borderRadius: "40px",
                background: isDark
                    ? "linear-gradient(180deg, rgb(40, 40, 40) 0%, rgb(30, 30, 30) 9%, rgb(20, 20, 20) 32%, rgb(10, 10, 10) 73%, rgb(40, 40, 40) 100%)"
                    : "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(201, 201, 201) 9%, rgb(161, 161, 161) 32%, rgb(117, 117, 117) 73%, rgb(255, 255, 255) 100%)",
            }}
        >
            <motion.div
                variants={innerVariants}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center w-full h-full"
                style={{
                    borderRadius: "37px",
                    padding: fullWidth ? "14px 28px" : "10px 24px",
                    boxShadow: "inset 2px 4px 5px 0px rgba(0, 0, 0, 0), inset 0px 0px 1px 1px rgba(0, 0, 0, 0)",
                }}
            >
                <span className="font-semibold text-foreground tracking-wide text-sm whitespace-nowrap">
                    {children}
                </span>
            </motion.div>
        </Container>
    );
};

export default GlassyButton;
