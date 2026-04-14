import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const FourPillars = () => {
  const pillars = [
    {
      id: 'engineering',
      number: '01',
      title: 'Engineering',
      description: 'Building robust, highly-available architectures using Rust, Go, and aggressive microservices. We focus on absolute performance.',
    },
    {
      id: 'design',
      number: '02',
      title: 'Design',
      description: 'Crafting pixel-perfect, minimalist user interfaces. We strip away the unnecessary to deliver pure, frictionless user journeys.',
    },
    {
      id: 'ai',
      number: '03',
      title: 'Intelligence',
      description: 'Training and deploying bespoke LLMs and diffusion models. Moving beyond hype to integrate tangible machine learning utility.',
    },
    {
      id: 'web3',
      number: '04',
      title: 'Web3',
      description: 'Architecting decentralized finance protocols and zero-knowledge proofs. We write smart contracts that secure millions.',
    }
  ];

  return (
    <section id="domains" className="py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Domains of Focus.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium">
            We don't do everything. We specialize in four core verticals, executing at the absolute highest level.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeInUp}
              className="group relative bg-background/40 backdrop-blur-xl p-10 md:p-12 border border-border rounded-3xl overflow-hidden hover:bg-background/60 transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
            >
              {/* Subtle hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 to-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-8">
                    {pillar.number} // {pillar.id.toUpperCase()}
                  </div>
                  <h3 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-sm mt-8 group-hover:text-foreground/80 transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FourPillars;
