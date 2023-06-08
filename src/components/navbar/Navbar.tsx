import Link from 'next/link'
import { FC } from 'react'
import styles from './Navbar.module.css'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar
