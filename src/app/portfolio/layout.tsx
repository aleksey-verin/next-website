import { FC, ReactNode } from 'react'
import styles from './page.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
