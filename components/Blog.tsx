'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'
import { BookOpen, Clock, ArrowUpRight, PenTool } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const postsMeta = [
    { date: 'Mar 2026', tags: ['React', 'Architecture'], href: '#', number: '01' },
    { date: 'Feb 2026', tags: ['Algorithms', 'CS Fundamentals'], href: '#', number: '02' },
    { date: 'Jan 2026', tags: ['Next.js', 'DevOps'], href: '#', number: '03' },
]

export default function Blog() {
    const { t } = useLanguage()
    return (
        <section id="blog" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                            <PenTool className="w-4 h-4 text-primary-500" />
                        </div>
                        <span className="text-sm font-mono text-primary-500 tracking-wider uppercase">{t.blog.sectionLabel}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.blog.title}
                    </h2>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-16">
                        {t.blog.subtitle}
                    </p>
                </FadeIn>

                <StaggerContainer className="space-y-4 max-w-3xl">
                    {postsMeta.map((post, i) => {
                        const content = t.blog.posts[i]
                        return (
                        <StaggerItem key={content.title}>
                            <motion.a
                                href={post.href}
                                className="group glass rounded-2xl p-6 md:p-8 block relative overflow-hidden"
                                whileHover={{ x: 6 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            >
                                {/* Left accent line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-500 to-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-5 flex-1">
                                        {/* Article number */}
                                        <span className="text-4xl font-bold text-gray-100 dark:text-white/[0.04] group-hover:text-primary-500/20 transition-colors duration-500 flex-shrink-0 font-mono hidden sm:block">
                                            {post.number}
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-xs font-mono text-gray-500 dark:text-gray-500">{post.date}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                                <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                                                    <Clock className="w-3 h-3" />
                                                    {content.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300 leading-snug">
                                                {content.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                                {content.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-primary-500/[0.08] text-primary-600 dark:text-primary-400 border border-primary-500/10">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="flex-shrink-0 mt-1 p-2 rounded-lg bg-gray-100/50 dark:bg-white/[0.03] group-hover:bg-primary-500/[0.08] transition-colors duration-300"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                                    </motion.div>
                                </div>
                            </motion.a>
                        </StaggerItem>
                    )})
                    }
                </StaggerContainer>

                <FadeIn delay={0.4}>
                    <div className="mt-12 max-w-3xl">
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2.5 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors group"
                            whileHover={{ x: 4 }}
                        >
                            <BookOpen className="w-4 h-4" />
                            {t.blog.viewAll}
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                &rarr;
                            </motion.span>
                        </motion.a>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}