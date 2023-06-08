'use client'
import { FC, useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = ({}) => {
  const { toggle, mode } = useContext(ThemeContext)
  // if (!toggle || !mode) return null

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === 'light' ? { left: '2px' } : { right: '2px' }} />
    </div>
  )
}

export default DarkModeToggle
