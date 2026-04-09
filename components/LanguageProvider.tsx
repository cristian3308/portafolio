'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Locale } from '../lib/translations'

type Translations = (typeof translations)[Locale]

interface LanguageContextType {
  locale: Locale
  t: Translations
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  t: translations.es as Translations,
  toggleLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
