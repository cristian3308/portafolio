'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Terminal, Download, Languages } from 'lucide-react'
import { Magnetic } from './Animations'
import { useLanguage } from './LanguageProvider'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { theme, setTheme } = useTheme()
    const { locale, t, toggleLocale } = useLanguage()

    const navItems = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.blog, href: '#blog' },
        { label: t.nav.contact, href: '#contact' },
    ]

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setScrolled(window.scrollY > 20)

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection('#' + entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '-20% 0px -70% 0px',
        })

        navItems.forEach((item) => {
            const el = document.querySelector(item.href)
            if (el) observer.observe(el)
        })

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                    ? 'glass-strong shadow-lg shadow-black/[0.03] dark:shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Magnetic strength={0.15}>
                    <motion.a
                        href="#"
                        className="flex items-center gap-2.5 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-purple-500/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                            <Terminal className="w-4 h-4 text-primary-500" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            cristian<span className="text-primary-500">.dev</span>
                        </span>
                    </motion.a>
                </Magnetic>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === item.href
                                    ? 'text-primary-500'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.href && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute inset-0 rounded-lg bg-primary-500/[0.08] dark:bg-primary-500/[0.12]"
                                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                                />
                            )}
                        </a>
                    ))}
                    <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-3" />
                    {/* Language toggle */}
                    <motion.button
                        onClick={toggleLocale}
                        className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-1.5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle language"
                    >
                        <Languages className="w-[18px] h-[18px]" />
                        <span className="text-xs font-bold uppercase">{locale === 'es' ? 'EN' : 'ES'}</span>
                    </motion.button>
                    {mounted && (
                        <motion.button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-white/[0.06] transition-all duration-300"
                            whileHover={{ scale: 1.05, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                    exit={{ scale: 0, rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    )}
                    <Magnetic strength={0.2}>
                        <motion.a
                            href="/cv.pdf"
                            download
                            className="ml-2 px-4 py-2 text-sm font-medium rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 flex items-center gap-2"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Download className="w-3.5 h-3.5" />
                            {t.nav.resume}
                        </motion.a>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileOpen ? 'close' : 'open'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
                        exit={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden glass-strong border-t border-gray-200/30 dark:border-white/[0.04] overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3 }}
                                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === item.href
                                            ? 'text-primary-500 bg-primary-500/[0.08]'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="flex items-center gap-3 pt-3 border-t border-gray-200/30 dark:border-white/[0.04] mt-2"
                            >
                                {mounted && (
                                    <button
                                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-white/5"
                                        aria-label="Toggle theme"
                                    >
                                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    </button>
                                )}
                                <button
                                    onClick={toggleLocale}
                                    className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-white/5 flex items-center gap-1.5"
                                    aria-label="Toggle language"
                                >
                                    <Languages className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase">{locale === 'es' ? 'EN' : 'ES'}</span>
                                </button>
                                <a
                                    href="/cv.pdf"
                                    download
                                    className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    {t.nav.resume}
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}