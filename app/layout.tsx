import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '../components/ThemeProvider'
import { LanguageProvider } from '../components/LanguageProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
    title: 'Cristian | Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in React, Next.js, TypeScript and scalable architectures. Building modern web experiences.',
    keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Software Engineer'],
    openGraph: {
        title: 'Cristian | Full Stack Developer',
        description: 'Senior Full Stack Developer specializing in React, Next.js, TypeScript and scalable architectures.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
                <ThemeProvider>
                    <LanguageProvider>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}