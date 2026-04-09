'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView, useAnimation, useScroll, useTransform, MotionValue } from 'framer-motion'

interface Props {
    children: React.ReactNode
    className?: string
    delay?: number
}

const easeOutQuint = [0.22, 1, 0.36, 1]

export function FadeIn({ children, className, delay = 0 }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.7, delay, ease: easeOutQuint }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function SlideIn({ children, className, delay = 0 }: Props & { direction?: 'left' | 'right' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: -50, filter: 'blur(4px)' },
                visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.7, delay, ease: easeOutQuint }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className, delay = 0 }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, scale: 0.85, filter: 'blur(6px)' },
                visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.6, delay, ease: easeOutQuint }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
    delay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.08, delay = 0 }: StaggerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: easeOutQuint } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function Parallax({ children, className, speed = 0.5 }: Props & { speed?: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

export function RevealText({ children, className, delay = 0 }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden ${className || ''}`}
        >
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { y: '100%', opacity: 0 },
                    visible: { y: '0%', opacity: 1 },
                }}
                transition={{ duration: 0.8, delay, ease: easeOutQuint }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

interface MagneticProps {
    children: ReactNode
    className?: string
    strength?: number
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = 'translate(0px, 0px)'
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out-quint ${className || ''}`}
        >
            {children}
        </div>
    )
}

