import { FC } from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div>@2023 WebSite. All rights reserved.</div>
      <div className={styles.social}>
        <Image className={styles.icon} src='/1.png' width={15} height={15} alt='Web Site' />
        <Image className={styles.icon} src='/2.png' width={15} height={15} alt='Web Site' />
        <Image className={styles.icon} src='/3.png' width={15} height={15} alt='Web Site' />
        <Image className={styles.icon} src='/4.png' width={15} height={15} alt='Web Site' />
      </div>
    </div>
  )
}

export default Footer
