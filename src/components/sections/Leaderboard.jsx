import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const leaders = [
    { rank: 1, name: 'Alex C.', points: '12.4k', trend: 'up' },
    { rank: 2, name: 'Elena R.', points: '11.8k', trend: 'up' },
    { rank: 3, name: 'Sarah J.', points: '10.2k', trend: 'down' },
    { rank: 4, name: 'Marcus T.', points: '9.5k', trend: 'same' },
    { rank: 5, name: 'David L.', points: '8.1k', trend: 'up' },
];

const Leaderboard = () => {
    return (
        <div className="flex flex-col space-y-6 h-full mt-12 lg:mt-0">
            <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="text-xl font-medium tracking-tight text-foreground flex items-center">
                    Top Contributors
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monthly</span>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex-grow"
            >
                <div className="flex flex-col">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.rank}
                            variants={fadeInUp}
                            className={`flex items-center justify-between py-3 group border-b border-border transition-colors ${index === 0 ? 'bg-foreground/[0.03] -mx-4 px-4 rounded-lg border-transparent' : ''
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                {/* Rank */}
                                <span className={`text-sm font-mono w-6 text-center ${index === 0 ? 'text-foreground font-bold' : 'text-muted-foreground'
                                    }`}>
                                    0{leader.rank}
                                </span>

                                {/* Name */}
                                <span className={`font-semibold text-sm ${index === 0 ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground transition-colors'
                                    }`}>
                                    {leader.name}
                                </span>
                            </div>

                            {/* Score & Trend */}
                            <div className="flex items-center space-x-3">
                                <span className="text-foreground font-medium text-sm tracking-tight">{leader.points}</span>
                                <div className="w-4 flex justify-end">
                                    {leader.trend === 'up' && <ArrowUpRight size={14} className="text-muted-foreground" />}
                                    {leader.trend === 'down' && <ArrowDownRight size={14} className="text-muted-foreground/50" />}
                                    {leader.trend === 'same' && <Minus size={14} className="text-muted-foreground/50" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Leaderboard;
