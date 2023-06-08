'use client'

import { FC, ReactNode, createContext, useState } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<any>(null)

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
