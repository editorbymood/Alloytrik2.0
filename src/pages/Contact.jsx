import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import Layout from '@/components/layout/Layout';

export function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'alloytrik@gmail.com',
            href: 'mailto:alloytrik@gmail.com',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            icon: MessageCircle,
            title: 'Join Community',
            content: 'WhatsApp Community',
            href: 'https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: MapPin,
            title: 'Location',
            content: 'Remote & Global',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Clock,
            title: 'Response Time',
            content: '24-48 hours',
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <Layout>
            <div className="pt-20 min-h-screen">
                <section className="py-20 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-500/5 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10 dark:border-white/10 light:border-gray-300"
                            >
                                <span className="text-white dark:text-white light:text-gray-800 font-medium">Get In Touch</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-8 leading-tight">
                                Let's Build Something Amazing
                            </h1>

                            <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Have a project in mind? Want to collaborate? Or just want to say hello?
                                We'd love to hear from you!
                            </p>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                        >
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ y: -5 }}
                                    className="relative overflow-hidden rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white/80 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-gray-200 p-6 group"
                                >
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} mb-4`}>
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                                        {info.title}
                                    </h3>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-cyan-400 transition-colors"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">{info.content}</p>
                                    )}

                                    {/* Hover Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Contact Form */}
                        <div className="max-w-4xl mx-auto">
                            <ContactForm />
                        </div>

                        {/* Additional CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-16 text-center"
                        >
                            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-white/10 light:border-gray-200">
                                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                                    Prefer Direct Communication?
                                </h3>
                                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Join our vibrant WhatsApp community to connect directly with our founders and fellow creators.
                                </p>
                                <motion.a
                                    href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Join Community</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Contact;
