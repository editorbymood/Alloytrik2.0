import { motion } from 'framer-motion';
import InfiniteMenu from '../ui/InfiniteMenu';

const items = [
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    link: '#',
    title: 'Neon Genesis',
    description: 'Next-generation zero-knowledge rollup infrastructure.'
  },
  {
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop',
    link: '#',
    title: 'Aura Compute',
    description: 'Decentralized distributed training network for LLMs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
    link: '#',
    title: 'Project Zenith',
    description: 'Spatial computing interface for Web3 interactions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2874&auto=format&fit=crop',
    link: '#',
    title: 'Void Protocol',
    description: 'Hyper-optimized liquidity routing engine.'
  }
];

const ScrollingShowcase = () => {
  return (
    <section className="py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent mb-6">
            Future Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10 font-medium">
            Discover our latest innovations across Web3, AI, Design, and Development
          </p>
        </motion.div>
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} scale={1.6} />
      </div>
    </section>
  );
};

export default ScrollingShowcase;
