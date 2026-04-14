import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const About = () => {
  const communityFeatures = [
    {
      title: 'Global Network',
      description: 'Connect with elite builders, founders, and designers from across the globe in an unfiltered environment.',
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn directly from industry veterans who have scaled AI models and engineered definitive Web3 protocols.',
    },
    {
      title: 'Exclusive Resources',
      description: 'Access highly-curated tools, premium UI kits, robust code boilerplates, and deep-dive technical architectures.',
    },
    {
      title: 'Private Events',
      description: 'Participate in invite-only virtual hackathons, intimate founder AMAs, and high-level strategy critiques.',
    }
  ];

  return (
    <section id="ecosystem" className="py-32 relative bg-transparent">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Sticky Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-40 h-fit"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              The Framework.
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8 max-w-md font-medium">
              We stripped away the noise. AlloyTrik is a highly curated ecosystem designed exclusively for top-tier execution. No spam, no fluff—just builders building.
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-foreground font-medium hover:text-muted-foreground transition-colors group">
              <span>View the Manifesto</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right: Feature Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group flex flex-col p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-border hover:bg-background/60 transition-colors duration-500 shadow-sm"
              >
                <div className="text-xs font-mono text-muted-foreground mb-8 uppercase tracking-widest">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
