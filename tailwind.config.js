/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                dark: {
                    DEFAULT: '#0a0a0f',
                    50: '#0d0d14',
                    100: '#111118',
                    200: '#18181f',
                    300: '#1f1f28',
                    400: '#2a2a35',
                    500: '#35354a',
                },
                accent: {
                    blue: '#60a5fa',
                    purple: '#a78bfa',
                    pink: '#f472b6',
                    emerald: '#34d399',
                    amber: '#fbbf24',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'Fira Code', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-down': 'slideDown 0.4s ease-out forwards',
                'slide-left': 'slideLeft 0.6s ease-out forwards',
                'slide-right': 'slideRight 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out infinite 2s',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
                'gradient-fast': 'gradient 4s ease infinite',
                'spin-slow': 'spin 8s linear infinite',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'morph': 'morph 8s ease-in-out infinite',
                'border-glow': 'borderGlow 4s ease-in-out infinite',
                'text-reveal': 'textReveal 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)' },
                    '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
                borderGlow: {
                    '0%, 100%': { borderColor: 'rgba(99, 102, 241, 0.3)' },
                    '50%': { borderColor: 'rgba(99, 102, 241, 0.6)' },
                },
                textReveal: {
                    '0%': { clipPath: 'inset(0 100% 0 0)' },
                    '100%': { clipPath: 'inset(0 0 0 0)' },
                },
            },
            backgroundSize: {
                '300%': '300%',
                '400%': '400%',
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
                'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
        },
    },
    plugins: [],
}