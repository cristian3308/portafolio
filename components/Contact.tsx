'use client'

import { motion } from 'framer-motion'
import { FadeIn, Magnetic, StaggerContainer, StaggerItem } from './Animations'
import { Send, Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const socials = [
    { label: 'GitHub', href: 'https://github.com/cristian3308', icon: Github, color: 'group-hover:text-gray-900 dark:group-hover:text-white' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/cristian3308', icon: Linkedin, color: 'group-hover:text-blue-500' },
    { label: 'Twitter', href: 'https://twitter.com/cristian3308', icon: Twitter, color: 'group-hover:text-sky-500' },
    { label: 'Email', href: 'mailto:cristian3308dev@gmail.com', icon: Mail, color: 'group-hover:text-primary-500' },
]

export default function Contact() {
    const { t } = useLanguage()
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-[100px]"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[100px]"
                    animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                                <Send className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="text-sm font-mono text-primary-500 tracking-wider uppercase">{t.contact.sectionLabel}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t.contact.title}
                        </h2>
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
                        <p className="text-gray-500 dark:text-gray-400 mx-auto mb-12 max-w-md leading-relaxed">
                            {t.contact.subtitle}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <Magnetic strength={0.15}>
                            <motion.a
                                href="mailto:cristian3308dev@gmail.com"
                                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-primary-500 text-white font-medium text-lg overflow-hidden shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    {t.contact.sayHello}
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </motion.a>
                        </Magnetic>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <StaggerContainer className="mt-16 flex items-center justify-center gap-4">
                            {socials.map((social) => (
                                <StaggerItem key={social.label}>
                                    <motion.a
                                        href={social.href}
                                        target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className="group flex flex-col items-center gap-2.5"
                                        whileHover={{ y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        <div className="p-4 rounded-2xl glass relative overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/10">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.04] to-purple-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <social.icon className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-300 relative z-10`} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}