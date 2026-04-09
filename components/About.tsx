'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from './Animations'
import { Code2, Database, Globe, Layers, Cpu, GitBranch, Briefcase } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const skillsData = [
    {
        categoryKey: 'frontend' as const,
        icon: Globe,
        color: 'from-blue-500 to-cyan-500',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        categoryKey: 'backend' as const,
        icon: Database,
        color: 'from-purple-500 to-pink-500',
        items: ['Node.js', 'Express', 'Python', 'Django', 'Firebase'],
    },
    {
        categoryKey: 'dataAi' as const,
        icon: Cpu,
        color: 'from-orange-500 to-red-500',
        items: ['PyTorch', 'Machine Learning', 'Data Analysis', 'Prediction Models', 'Docker'],
    },
    {
        categoryKey: 'dbTools' as const,
        icon: Layers,
        color: 'from-green-500 to-emerald-500',
        items: ['SQLite', 'Firestore', 'Git', 'Electron', 'REST APIs'],
    },
]

const experienceTech = [
    ['React', 'Next.js', 'TypeScript', 'Python', 'Firebase'],
    ['TypeScript', 'Node.js', 'Express', 'SQLite', 'Electron'],
    ['Python', 'PyTorch', 'Docker', 'Data Science'],
]

export default function About() {
    const timelineRef = useRef(null)
    const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' })
    const { t } = useLanguage()

    return (
        <>
            {/* About Section */}
            <section id="about" className="py-24 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                                <Code2 className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="text-sm font-mono text-primary-500 tracking-wider uppercase">{t.about.sectionLabel}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t.about.title}
                        </h2>
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-16 mt-16">
                        {/* Bio */}
                        <FadeIn delay={0.1}>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p className="text-lg">{t.about.bio[0]}</p>
                                <p>{t.about.bio[1]}</p>
                                <p>{t.about.bio[2]}</p>
                                <motion.a
                                    href="/cv.pdf"
                                    download
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.04] border border-gray-200/50 dark:border-white/[0.06] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200/80 dark:hover:bg-white/[0.08] transition-all duration-300 text-sm group"
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Cpu className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    {t.about.downloadResume}
                                </motion.a>
                            </div>
                        </FadeIn>

                        {/* Skills Grid */}
                        <StaggerContainer className="grid grid-cols-2 gap-4">
                            {skillsData.map((skill) => (
                                <StaggerItem key={skill.categoryKey}>
                                    <motion.div
                                        className="glass rounded-2xl p-5 h-full relative overflow-hidden group cursor-default"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        {/* Gradient accent on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-3 shadow-lg shadow-black/5`}>
                                                <skill.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{t.about.skills[skill.categoryKey]}</h3>
                                            <ul className="space-y-2">
                                                {skill.items.map((item) => (
                                                    <li key={item} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${skill.color}`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                                <Briefcase className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="text-sm font-mono text-primary-500 tracking-wider uppercase">{t.experience.sectionLabel}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t.experience.title}
                        </h2>
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
                    </FadeIn>

                    {/* Timeline */}
                    <div ref={timelineRef} className="mt-16 max-w-3xl relative">
                        {/* Animated timeline line */}
                        <div className="absolute left-[19px] top-0 bottom-0 w-px">
                            <motion.div
                                className="w-full bg-gradient-to-b from-primary-500 via-purple-500 to-transparent"
                                initial={{ height: 0 }}
                                animate={timelineInView ? { height: '100%' } : { height: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            />
                        </div>

                        <div className="space-y-10">
                            {t.experience.items.map((exp, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.2}>
                                    <div className="flex gap-6 group">
                                        {/* Timeline dot */}
                                        <div className="relative flex-shrink-0">
                                            <motion.div
                                                className="w-10 h-10 rounded-full bg-white dark:bg-dark-800 border-2 border-primary-500/30 flex items-center justify-center group-hover:border-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/10"
                                                whileHover={{ scale: 1.15 }}
                                            >
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
                                            </motion.div>
                                        </div>

                                        {/* Content card */}
                                        <motion.div
                                            className="flex-1 glass rounded-2xl p-6 md:p-8 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary-500/5 transition-all duration-500"
                                            whileHover={{ x: 4 }}
                                        >
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500/50 via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                                                    <p className="text-primary-500 font-medium text-sm">{exp.company}</p>
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono mt-2 md:mt-0 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/[0.04]">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {experienceTech[i]?.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs font-medium rounded-lg bg-primary-500/[0.08] text-primary-600 dark:text-primary-400 border border-primary-500/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}