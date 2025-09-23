"use client"

import * as React from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
}

export function LanguageProvider({ children, defaultLanguage = "fr" }: LanguageProviderProps) {
  const [language, setLanguageState] = React.useState<Language>(defaultLanguage)

  React.useEffect(() => {
    // Load language from localStorage on mount
    const stored = localStorage.getItem("language") as Language | null
    if (stored && (stored === "fr" || stored === "en")) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = React.useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Update document lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLanguage
    }
  }, [])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}