import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import XIcon from '../ui/XIcon';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Founders = () => {
  const founders = [
    {
      name: 'Shashank Sharma',
      role: 'Architect & Engineer',
      image: 'https://i.pravatar.cc/150?u=shashank',
      bio: 'Leading systems architecture and driving the core vision. Obsessed with absolute performance and minimalist design.',
      social: {
        github: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Trikansh',
      role: 'Creative Director',
      image: 'https://i.pravatar.cc/150?u=trikansh',
      bio: 'Crafting the visual language and user experience. Focused on removing friction and elevating the aesthetic standard.',
      social: {
        github: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="studio" className="py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            The Studio.
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Founded by engineers and designers who simply refuse to ship mediocre products.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-24"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={fadeInUp}
              className="group flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <div className="absolute inset-0 bg-foreground/5 rounded-full" />
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground mb-1 tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                  {founder.role}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6 font-medium">
                  {founder.bio}
                </p>

                <div className="flex items-center space-x-6">
                  <a href={founder.social.github} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a href={founder.social.twitter} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <XIcon size={20} />
                  </a>
                  <a href={founder.social.linkedin} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;