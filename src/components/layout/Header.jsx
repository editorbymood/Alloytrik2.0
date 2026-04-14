import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import GlassyButton from '../ui/GlassyButton';
import ThemeToggle from '../ui/ThemeToggle';
import WaveButton from '../ui/WaveButton';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Glass Stack transforms based on theme
  const headerWidth = useTransform(scrollY, [0, 100], ['90%', '75%']);
  const headerY = useTransform(scrollY, [0, 100], [24, 16]);

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.75)']
      : ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.75)']
  );

  const headerBlur = useTransform(scrollY, [0, 100], ['blur(12px)', 'blur(24px)']);

  const navItems = [
    { name: 'Platform', href: '#platform' },
    { name: 'Ecosystem', href: '#community' },
    { name: 'Developers', href: '#developers' },
    { name: 'Studio', href: '#studio' },
  ];

  return (
    <motion.header
      style={{
        width: headerWidth,
        y: headerY,
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
      className="fixed left-0 right-0 mx-auto z-50 rounded-[32px] border border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glass Stack Inner Border / Highlight */}
      <div
        className="absolute inset-0 rounded-[32px] pointer-events-none transition-shadow duration-500"
        style={{
          boxShadow: isDark
            ? 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.5)'
            : 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.05)'
        }}
      />

      {/* Outer Drop Shadow */}
      <div
        className="absolute inset-0 rounded-[32px] pointer-events-none transition-shadow duration-500"
        style={{
          boxShadow: isDark
            ? '0 12px 40px -12px rgba(0, 0, 0, 0.8)'
            : '0 12px 40px -12px rgba(0, 0, 0, 0.15)'
        }}
      />

      <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto relative z-10">
        {/* Advanced SVG Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <Logo className="w-9 h-9 text-foreground transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          <span className="text-xl tracking-tight text-foreground/90 group-hover:text-foreground transition-colors" style={{ fontWeight: 600, letterSpacing: "-0.5px" }}>Alloytrik</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <WaveButton
              key={item.name}
              href={item.href}
              text={item.name}
              waveColor1="rgba(255, 255, 255, 0.05)"
              waveColor2="rgba(255, 255, 255, 0.1)"
              waveColor3="rgba(255, 255, 255, 0.15)"
              defaultTextColor="hsl(var(--muted-foreground))"
              hoverTextColor="hsl(var(--foreground))"
              className="text-sm rounded-full"
            />
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4 relative z-20">
          <ThemeToggle />
          <WaveButton href="#" waves={['bg-foreground/10', 'bg-foreground/30', 'bg-foreground']}>
            Log in
          </WaveButton>
          <GlassyButton href="#">
            Join Network
          </GlassyButton>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-background/90 backdrop-blur-xl border-t border-border text-center mt-4 rounded-3xl mx-4"
      >
        <div className="p-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <WaveButton
              key={item.name}
              href={item.href}
              text={item.name}
              onClick={() => setIsMenuOpen(false)}
              waveColor1="rgba(255, 255, 255, 0.05)"
              waveColor2="rgba(255, 255, 255, 0.1)"
              waveColor3="rgba(255, 255, 255, 0.15)"
              defaultTextColor="hsl(var(--muted-foreground))"
              hoverTextColor="hsl(var(--foreground))"
              className="text-lg py-3 rounded-xl w-full"
            />
          ))}
          <div className="h-px bg-border w-full" />
          <div className="mt-2 w-full">
            <GlassyButton href="#" fullWidth>
              Join Network
            </GlassyButton>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
