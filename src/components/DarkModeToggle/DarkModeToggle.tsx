'use client'
import { FC, useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = ({}) => {
  const themeContext = useContext(ThemeContext)
  const toggle = themeContext?.toggle
  const mode = themeContext?.mode

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === 'light' ? { left: '3px' } : { right: '3px' }} />
    </div>
  )
}

export default DarkModeToggle
