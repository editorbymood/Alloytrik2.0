import { motion } from 'framer-motion';

const Manifesto = () => {
    return (
        <section className="py-32 bg-transparent relative border-t border-border overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Subtle Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center space-x-4 mb-16"
                >
                    <div className="h-px bg-border flex-grow" />
                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                        The Manifesto
                    </span>
                    <div className="h-px bg-border flex-grow" />
                </motion.div>

                {/* Core Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.15] mb-8">
                        The internet has become noisy. We are building the signal. A sanctuary for deep technical work and uncompromising design.
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed max-w-3xl">
                        AlloyTrik wasn't created to be another social network or a generic portfolio. It exists because the best engineers and designers needed a space free from the algorithmic feed—a place where absolute performance, minimalist architecture, and the raw pursuit of shipping great software are the only metrics that matter.
                    </p>
                </motion.div>

                {/* Text Grid */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Engineering as a Discipline</h3>
                        <p className="text-foreground/80 leading-relaxed">
                            We fundamentally believe that writing code is an act of architecture. Whether it is deploying aggressive Rust microservices or writing zero-knowledge proofs, we approach engineering not as a means to an end, but as a craft that demands precision, elegance, and extreme reliability at scale.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Minimalism by Necessity</h3>
                        <p className="text-foreground/80 leading-relaxed">
                            True minimalism isn't just about white space; it is about the agonizing elimination of the unnecessary. Every pixel, every transition, and every component must justify its existence. By removing friction, we elevate the user experience to something that feels inevitable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Intelligence Guided by Utility</h3>
                        <p className="text-foreground/80 leading-relaxed">
                            We reject AI hype in favor of AI utility. We are heavily invested in fine-tuning foundation models and building specialized inference engines that solve actual, deterministic pipelines rather than generating parlor tricks. The future belongs to integrated, silent intelligence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">The Decentralized Primitives</h3>
                        <p className="text-foreground/80 leading-relaxed">
                            Our roots are embedded in Web3 architecture. We architect secure, immutable systems and protocols that operate trustlessly. We build the financial and data primitives of tomorrow, ensuring they are as mathematically beautiful as they are unbreakable.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Manifesto;
