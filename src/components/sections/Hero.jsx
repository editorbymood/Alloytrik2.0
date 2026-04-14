import { motion, useScroll, useTransform } from 'framer-motion';
import GridTextCursorTrail from '../ui/GridTextCursorTrail';
import IconSlideButton from '../ui/IconSlideButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">

      {/* Grid Text Cursor Trail (Interactive Background Layer) */}
      <GridTextCursorTrail
        text="AlloyTrik "
        customColors={['#cc292b', '#ff4d4f', '#f2f2f2', '#888888', '#555555']}
        gridSize={70}
      />

      {/* Ultra Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Central Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.2] rounded-full blur-[120px] pointer-events-none" />

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] font-bold text-black/[0.04] tracking-tighter leading-none whitespace-nowrap"
        >
          ALLOYTRIK
        </motion.div>
      </div>

      {/* Main Content Container */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur-md mb-8 flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#cc292b] animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-foreground/80 uppercase">The Network is Live</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9] max-w-5xl mb-8"
        >
          Build the <br />
          <span className="text-[#cc292b]">impossible.</span>
        </motion.h1>

        {/* Sophisticated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed mb-12"
        >
          Join a highly-curated ecosystem of elite developers, minimalist designers, and visionary architects. Elevate your craft among peers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <IconSlideButton
            text="Apply to Join"
            href="#"
            variant="primary"
            className="w-full sm:w-auto"
          />

          <IconSlideButton
            text="Explore Ecosystem"
            href="#"
            variant="outline"
            className="w-full sm:w-auto"
          />
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/0 via-foreground/20 to-foreground/0 overflow-hidden relative">
          <motion.div
            animate={{ y: [-30, 60] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-[#cc292b]"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
