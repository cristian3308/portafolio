'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Magnetic, RevealText, StaggerContainer, StaggerItem } from './Animations'
import { useLanguage } from './LanguageProvider'

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setText(currentWord.slice(0, text.length + 1))
                    if (text.length + 1 === currentWord.length) {
                        setTimeout(() => setIsDeleting(true), pauseTime)
                    }
                } else {
                    setText(currentWord.slice(0, text.length - 1))
                    if (text.length === 0) {
                        setIsDeleting(false)
                        setWordIndex((prev) => (prev + 1) % words.length)
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        )
        return () => clearTimeout(timeout)
    }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

    return text
}

export default function Hero() {
    const { t } = useLanguage()
    const typedText = useTypingEffect(t.hero.roles as unknown as string[])
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background orbs with parallax */}
            <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
                <motion.div
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/25 to-purple-500/15 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-pink-500/15 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 30, -20, 0],
                        scale: [1, 0.95, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-primary-500/10 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 40, -30, 0],
                        y: [0, -30, 40, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
            </motion.div>

            {/* Dot grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <motion.div className="container mx-auto px-6 relative z-10" style={{ opacity }}>
                <StaggerContainer className="max-w-4xl mx-auto">
                    {/* Status Badge */}
                    <StaggerItem>
                        <motion.div
                            className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full glass border border-green-500/20"
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {t.hero.available}
                            </span>
                        </motion.div>
                    </StaggerItem>

                    {/* Main heading with reveal */}
                    <StaggerItem>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] mb-6">
                            <RevealText delay={0.3}>
                                <span className="text-gray-900 dark:text-white">{t.hero.heading[0]}</span>
                                <span className="gradient-text">{t.hero.heading[1]}</span>
                            </RevealText>
                            <RevealText delay={0.5}>
                                <span className="gradient-text">{t.hero.heading[2]}</span>
                                <span className="text-gray-900 dark:text-white">{t.hero.heading[3]}</span>
                            </RevealText>
                            <RevealText delay={0.7}>
                                <span className="text-gray-900 dark:text-white">{t.hero.heading[4]}</span>
                            </RevealText>
                        </h1>
                    </StaggerItem>

                    {/* Typing role effect */}
                    <StaggerItem>
                        <div className="mb-6 h-8 flex items-center">
                            <span className="text-lg md:text-xl font-mono text-primary-500">
                                {'> '}{typedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                                    className="inline-block w-[2px] h-6 bg-primary-500 ml-0.5 align-middle"
                                />
                            </span>
                        </div>
                    </StaggerItem>

                    {/* Description */}
                    <StaggerItem>
                        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
                            {t.hero.specializing}{' '}
                            <span className="text-gray-900 dark:text-white font-medium relative inline-block group">
                                TypeScript & React
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </span>,{' '}
                            <span className="text-gray-900 dark:text-white font-medium relative inline-block group">
                                Python & AI
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </span>{t.hero.and}{' '}
                            <span className="text-gray-900 dark:text-white font-medium relative inline-block group">
                                Node.js
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </span>.
                            {' '}{t.hero.description}
                        </p>
                    </StaggerItem>

                    {/* Location */}
                    <StaggerItem>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-10">
                            <MapPin className="w-4 h-4" />
                            <span>{t.hero.location}</span>
                            <span className="mx-2 w-1 h-1 rounded-full bg-gray-400" />
                            <span className="text-gray-400 dark:text-gray-600">UTC-5</span>
                        </div>
                    </StaggerItem>

                    {/* CTA Buttons */}
                    <StaggerItem>
                        <div className="flex flex-wrap items-center gap-4 mb-16">
                            <Magnetic strength={0.15}>
                                <motion.a
                                    href="#projects"
                                    className="group relative px-7 py-3.5 rounded-2xl bg-primary-500 text-white font-medium overflow-hidden shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {t.hero.viewProjects}
                                        <motion.span
                                            className="inline-block"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            &rarr;
                                        </motion.span>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                </motion.a>
                            </Magnetic>
                            <Magnetic strength={0.15}>
                                <motion.a
                                    href="#contact"
                                    className="px-7 py-3.5 rounded-2xl font-medium border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-all duration-300 gradient-border"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {t.hero.getInTouch}
                                </motion.a>
                            </Magnetic>
                        </div>
                    </StaggerItem>

                    {/* Social Links */}
                    <StaggerItem>
                        <div className="flex items-center gap-1">
                            {[
                                { Icon: Github, href: 'https://github.com/cristian3308', label: 'GitHub' },
                                { Icon: Linkedin, href: 'https://linkedin.com/in/cristian3308', label: 'LinkedIn' },
                                { Icon: Mail, href: 'mailto:cristian3308dev@gmail.com', label: 'Email' },
                            ].map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="p-3 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/[0.04] transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-600">
                    {t.hero.scroll}
                </span>
                <motion.div
                    className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-white/20 flex justify-center pt-1.5"
                >
                    <motion.div
                        className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white/40"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}