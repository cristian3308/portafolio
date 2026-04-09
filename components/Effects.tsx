'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window
        if (isTouchDevice) return

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"], input, textarea, select')) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = () => setIsHovering(false)
        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)
        document.documentElement.addEventListener('mouseleave', handleMouseLeave)
        document.documentElement.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [cursorX, cursorY, isVisible])

    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 48 : 16,
                    height: isHovering ? 48 : 16,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
                <div className="w-full h-full rounded-full bg-white" />
            </motion.div>
        </>
    )
}

export function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            setProgress(scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0)
        }

        window.addEventListener('scroll', updateProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 z-[100] origin-left"
            style={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1 }}
        />
    )
}

export function Noise() {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] dark:opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
            }}
        />
    )
}

export function GridBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-dark" />
        </div>
    )
}
