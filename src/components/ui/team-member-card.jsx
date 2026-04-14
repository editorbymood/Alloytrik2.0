import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import XIcon from './XIcon';
import { useState } from 'react';

export function TeamMemberCard({ member }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const {
        name,
        role,
        avatar,
        bio,
        skills = [],
        social = {},
        stats = {}
    } = member;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
        >
            {/* Card Container */}
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl glass-card transition-all duration-300"
                style={{
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
            >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Animated Border Glow */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                        borderColor: ['var(--gradient-from)', 'var(--gradient-via)', 'var(--gradient-from)'],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ border: '1px solid transparent' }}
                />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col items-center text-center">
                        {/* Avatar with Gradient Ring */}
                        <div className="relative mb-4">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 rounded-full gradient-primary blur-md opacity-75"
                            />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 gradient-primary">
                                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={avatar}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold gradient-text">
                                            {name?.charAt(0)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Name */}
                        <motion.h3
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl md:text-3xl font-bold gradient-text mb-2"
                        >
                            {name}
                        </motion.h3>

                        {/* Role Badge */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
                        >
                            <span className="text-sm font-medium text-primary">{role}</span>
                        </motion.div>

                        {/* Skills Tags */}
                        {skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-card/50 border border-border text-foreground hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        )}

                        {/* Stats (if available) */}
                        {(stats.projects || stats.contributions) && (
                            <div className="flex gap-6 mb-4">
                                {stats.projects && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold" style={{ color: 'var(--gradient-from)' }}>{stats.projects}</div>
                                        <div className="text-xs opacity-60">Projects</div>
                                    </div>
                                )}
                                {stats.contributions && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold" style={{ color: 'var(--gradient-via)' }}>{stats.contributions}</div>
                                        <div className="text-xs opacity-60">Contributions</div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Social Links */}
                        {(social.linkedin || social.twitter || social.github || social.website) && (
                            <div className="flex gap-3 mb-4">
                                {social.linkedin && (
                                    <motion.a
                                        href={social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-blue-100 hover:bg-blue-500/20 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5 text-blue-400" />
                                    </motion.a>
                                )}
                                {social.twitter && (
                                    <motion.a
                                        href={social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-sky-100 hover:bg-sky-500/20 transition-colors"
                                    >
                                        <XIcon className="w-5 h-5 text-sky-400" />
                                    </motion.a>
                                )}
                                {social.github && (
                                    <motion.a
                                        href={social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-gray-100 hover:bg-gray-500/20 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-gray-300 dark:text-gray-300 light:text-gray-700" />
                                    </motion.a>
                                )}
                                {social.website && (
                                    <motion.a
                                        href={social.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-purple-100 hover:bg-purple-500/20 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-purple-400" />
                                    </motion.a>
                                )}
                            </div>
                        )}

                        {/* Expand/Collapse Button (if bio exists) */}
                        {bio && (
                            <motion.button
                                onClick={() => setIsExpanded(!isExpanded)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-sm font-medium transition-colors"
                                style={{ color: 'var(--gradient-from)' }}
                            >
                                {isExpanded ? 'Show Less' : 'Read More'}
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </motion.button>
                        )}
                    </div>

                    {/* Expandable Bio Section */}
                    <AnimatePresence>
                        {bio && isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-4 pt-4 border-t border-white/10 dark:border-white/10 light:border-gray-200"
                            >
                                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                                    {bio}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hover Shine Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export default TeamMemberCard;
