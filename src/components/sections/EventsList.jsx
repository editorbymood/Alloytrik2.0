import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const events = [
    {
        id: 1,
        title: 'Web3 Architecture Deep Dive',
        date: 'Oct 24',
        time: '18:00 UTC',
        type: 'Virtual',
        host: 'Alex Chen',
    },
    {
        id: 2,
        title: 'Global AI Hackathon Kickoff',
        date: 'Oct 28',
        time: '12:00 UTC',
        type: 'Hybrid',
        host: 'Sarah Jenkins',
    },
    {
        id: 3,
        title: 'UI/UX Critique Session',
        date: 'Nov 02',
        time: '16:00 UTC',
        type: 'Virtual',
        host: 'Marcus Thorne',
    }
];

const EventsList = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="text-xl font-medium tracking-tight text-foreground flex items-center">
                    Upcoming Events
                </h3>
                <button className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Calendar</button>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-4"
            >
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        variants={fadeInUp}
                        className="group flex items-center justify-between py-4 border-b border-border last:border-0"
                    >
                        <div className="flex items-center space-x-6">
                            {/* Date Block */}
                            <div className="flex flex-col items-start w-12 flex-shrink-0">
                                <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-foreground/80 transition-colors">
                                    {event.date.split(' ')[0]}
                                </span>
                                <span className="text-foreground text-xl font-medium tracking-tighter">
                                    {event.date.split(' ')[1]}
                                </span>
                            </div>

                            {/* Event Info */}
                            <div className="flex-grow">
                                <h4 className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors mb-1">
                                    {event.title}
                                </h4>
                                <div className="flex items-center space-x-3 text-xs text-muted-foreground font-medium">
                                    <span>{event.time}</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span>{event.type}</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span>Host: {event.host}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex items-center">
                            <button className="px-4 py-2 rounded-full text-xs font-bold border border-border text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                                RSVP
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default EventsList;
