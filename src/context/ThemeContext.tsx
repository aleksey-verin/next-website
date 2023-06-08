'use client'

import { FC, ReactNode, createContext, useState } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}
export interface ThemeContextType {
  toggle: () => void
  mode: modeType
}

type modeType = 'light' | 'dark'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<modeType>('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
