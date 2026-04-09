'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, Terminal } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const links = [
    { label: 'GitHub', href: 'https://github.com/cristian3308', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/cristian3308', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com/cristian3308', icon: Twitter },
    { label: 'Email', href: 'mailto:cristian3308dev@gmail.com', icon: Mail },
]

export default function Footer() {
    const { t } = useLanguage()
    return (
        <footer className="relative border-t border-gray-200/30 dark:border-white/[0.04]">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                            <Terminal className="w-3.5 h-3.5 text-primary-500" />
                        </div>
                        <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            cristian<span className="text-primary-500">.dev</span>
                        </span>
                    </motion.a>

                    {/* Social links */}
                    <div className="flex items-center gap-1">
                        {links.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/[0.04] transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                <link.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
                            {t.footer.builtWith} <Heart className="w-3 h-3 text-red-500 animate-pulse" /> {t.footer.using}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-600">
                            &copy; {new Date().getFullYear()} Cristian. {t.footer.rights}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}