'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'
import { ExternalLink, Github, Folder, Star, ArrowUpRight } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const featuredProjectsMeta = [
    {
        tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'SQLite', 'Electron'],
        github: 'https://github.com/cristian3308/wilson-pos-system_2',
        gradient: 'from-primary-500 to-purple-500',
    },
    {
        tech: ['JavaScript', 'Firebase', 'Bootstrap', 'HTML5', 'CSS3'],
        github: 'https://github.com/cristian3308/consolidado-bomba-web',
        live: 'https://cristian3308.github.io/consolidado-bomba-web',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        tech: ['Python', 'PyTorch', 'Machine Learning', 'Data Science'],
        github: 'https://github.com/cristian3308/prediccion_dolar',
        gradient: 'from-orange-500 to-red-500',
    },
]

const otherProjectsMeta = [
    { tech: ['Python', 'PyTorch', 'Docker'], github: 'https://github.com/cristian3308/prediccion_tasavis' },
    { tech: ['Python', 'AI', 'Automation'], github: 'https://github.com/cristian3308/Agente' },
    { tech: ['Python', 'Django', 'SQLite'], github: 'https://github.com/cristian3308/Nomina' },
    { tech: ['HTML', 'JavaScript', 'CSS'], github: 'https://github.com/cristian3308/Nomina_Estacion' },
    { tech: ['HTML', 'JavaScript', 'CSS'], github: 'https://github.com/cristian3308/mi_horario_2' },
    { tech: ['JavaScript', 'CSS', 'REST API'], github: 'https://github.com/cristian3308/rick-morty-proyecto' },
    { tech: ['TypeScript', 'React', 'Node.js', 'Electron'], github: 'https://github.com/cristian3308/wilson-pos-system' },
    { tech: ['HTML', 'CSS', 'Responsive'], github: 'https://github.com/cristian3308/responsive' },
    { tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/cristian3308/desarrllo-web' },
    { tech: ['JavaScript', 'HTML', 'CSS'], github: 'https://github.com/cristian3308/contabilidad_2' },
    { tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/cristian3308/mi_horario' },
    { tech: ['JavaScript', 'Node.js', 'E-commerce'], github: 'https://github.com/cristian3308/PAGINA_DROP' },
    { tech: ['JavaScript', 'CSS', 'API'], github: 'https://github.com/cristian3308/rick-morty' },
    { tech: ['HTML', 'CSS'], github: 'https://github.com/cristian3308/kands' },
    { tech: ['HTML', 'CSS'], github: 'https://github.com/cristian3308/proyectoceo' },
]

export default function Projects() {
    const { t } = useLanguage()
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                            <Folder className="w-4 h-4 text-primary-500" />
                        </div>
                        <span className="text-sm font-mono text-primary-500 tracking-wider uppercase">{t.projects.sectionLabel}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.projects.title}
                    </h2>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-16">
                        {t.projects.subtitle}
                    </p>
                </FadeIn>

                {/* Featured Projects */}
                <div className="space-y-8 mb-20">
                    {featuredProjectsMeta.map((project, i) => {
                        const content = t.projects.featuredItems[i]
                        return (
                        <FadeIn key={content.title} delay={i * 0.15}>
                            <motion.div
                                className="group glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
                                whileHover={{ y: -4 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            >
                                {/* Top gradient line */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Background glow on hover */}
                                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] rounded-full blur-3xl transition-opacity duration-700`} />

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="text-xs font-mono text-primary-500 uppercase tracking-wider">{t.projects.featured}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                                            {content.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-xl">
                                            {content.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tch) => (
                                                <span key={tch} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-primary-500/[0.08] text-primary-600 dark:text-primary-400 border border-primary-500/10">
                                                    {tch}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                                whileHover={{ x: 2 }}
                                            >
                                                <Github className="w-4 h-4" /> {t.projects.sourceCode}
                                            </motion.a>
                                            {project.live && (
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                                    whileHover={{ x: 2 }}
                                                >
                                                    <ExternalLink className="w-4 h-4" /> {t.projects.liveDemo}
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                    <motion.div
                                        className="hidden md:flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-all duration-500"
                                        whileHover={{ rotate: 5, scale: 1.05 }}
                                    >
                                        <ArrowUpRight className="w-8 h-8 text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    )})
                    }
                </div>

                {/* Other Projects Grid */}
                <FadeIn>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">{t.projects.otherTitle}</h3>
                </FadeIn>
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjectsMeta.map((project, i) => {
                        const content = t.projects.otherItems[i]
                        return (
                        <StaggerItem key={content.title}>
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group glass rounded-2xl p-6 block h-full relative overflow-hidden"
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary-500/[0.08] flex items-center justify-center group-hover:bg-primary-500/[0.15] transition-colors duration-300">
                                            <Folder className="w-5 h-5 text-primary-500" />
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                                        {content.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {content.description}
                                    </p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                                        {project.tech.map((tch) => (
                                            <span key={tch} className="text-xs font-mono text-gray-500 dark:text-gray-500">
                                                {tch}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        </StaggerItem>
                    )})
                    }
                </StaggerContainer>
            </div>
        </section>
    )
}