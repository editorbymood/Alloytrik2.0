import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import XIcon from '../ui/XIcon';
import AnimatedArcGallery from '../ui/AnimatedArcGallery';

const members = [
    {
        id: 1,
        name: 'Alex C.',
        role: 'Protocol Engineer',
        avatar: 'https://i.pravatar.cc/150?u=alex',
        domain: 'Web3',
        experience: 'Core contributor to major L2 rollups. Obsessed with zero-knowledge paradigms.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 2,
        name: 'Sarah J.',
        role: 'Research Scientist',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        domain: 'Intelligence',
        experience: 'Fine-tuning foundation models. Bridging the gap between theoretical ML and engineering.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 3,
        name: 'Marcus T.',
        role: 'Interaction Designer',
        avatar: 'https://i.pravatar.cc/150?u=marcus',
        domain: 'Design',
        experience: 'Crafting minimalist, high-performance interfaces. Previously lead designer at hyper-growth SaaS.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 4,
        name: 'Elena R.',
        role: 'Systems Architect',
        avatar: 'https://i.pravatar.cc/150?u=elena',
        domain: 'Engineering',
        experience: 'Scaling complex distributed systems. Rust evangelist and Kubernetes orchestrator.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 5,
        name: 'David K.',
        role: 'Full-Stack Engineer',
        avatar: 'https://i.pravatar.cc/150?u=david',
        domain: 'Engineering',
        experience: 'Building heavily optimized Next.js architectures. Author of popular open-source state management tools.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 6,
        name: 'Maya L.',
        role: 'Smart Contract Auditor',
        avatar: 'https://i.pravatar.cc/150?u=maya',
        domain: 'Web3',
        experience: 'Securing heavily capitalized DeFi protocols. Specializes in symbolic execution and formal verification.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 7,
        name: 'Julian V.',
        role: 'Hardware Hacker',
        avatar: 'https://i.pravatar.cc/150?u=julian',
        domain: 'Engineering',
        experience: 'Reverse engineering embedded systems. Designing custom RISC-V architectures and local edge AI hardware.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
        id: 8,
        name: 'Kira M.',
        role: 'Generative AI Lead',
        avatar: 'https://i.pravatar.cc/150?u=kira',
        domain: 'Intelligence',
        experience: 'Training bespoke diffusion models for creative workflows. Bridging computational power with aesthetic generation.',
        social: { github: '#', twitter: '#', linkedin: '#' }
    }
];

const MemberCard = ({ member }) => (
    <div className="group p-6 bg-background/40 backdrop-blur-md hover:bg-background/60 border border-border hover:border-foreground/20 rounded-2xl transition-all duration-500 flex flex-col h-full w-full pointer-events-auto cursor-pointer shadow-sm hover:shadow-lg relative z-10">
        <div className="flex justify-between items-start mb-6">
            <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                {member.domain}
            </span>
        </div>

        <h4 className="text-lg font-semibold text-foreground tracking-tight mb-1">
            {member.name}
        </h4>
        <p className="text-sm font-mono text-muted-foreground mb-4">
            {member.role}
        </p>

        <p className="text-[13px] text-foreground/80 leading-relaxed mb-6 flex-grow font-medium group-hover:text-foreground transition-colors">
            {member.experience}
        </p>

        <div className="flex items-center space-x-4 pt-4 border-t border-border">
            <a href={member.social.github} className="text-muted-foreground hover:text-foreground transition-colors relative z-20">
                <Github size={16} />
            </a>
            <a href={member.social.twitter} className="text-muted-foreground hover:text-foreground transition-colors relative z-20">
                <XIcon size={16} />
            </a>
            <a href={member.social.linkedin} className="text-muted-foreground hover:text-foreground transition-colors relative z-20">
                <Linkedin size={16} />
            </a>
        </div>
    </div>
);

const CommunityMembers = () => {
    return (
        <section className="py-24 bg-transparent relative border-t border-border overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="relative z-20 pointer-events-none">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
                            Featured Network
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium max-w-xl">
                            A glimpse into the caliber of members driving the ecosystem forward.
                        </p>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center w-full min-h-[900px] py-10 pointer-events-none">
                    <AnimatedArcGallery
                        items={members}
                        radius={350}         // The radius of the spinning circle
                        itemWidth={280}      // Fixed width for cards
                        itemHeight={330}     // Fixed height for cards
                        rotationSpeed={80}   // A beautiful, slow steady orbit
                        renderItem={(member) => <MemberCard member={member} />}
                        className="scale-[0.6] sm:scale-75 md:scale-95 lg:scale-100"
                    />
                </div>
            </div>

            {/* Soft background glow to highlight the gallery */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.015] rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default CommunityMembers;
