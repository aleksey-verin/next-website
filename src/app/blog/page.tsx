import { FC } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div className={styles.mainContainer}>
      {/* {data.map((item) => ( */}
      <Link href={`/blog/1233`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src='' alt='' width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>H1</h1>
          <p className={styles.desc}>p tag</p>
        </div>
      </Link>
      {/* ))} */}
    </div>
  )
}

export default Blog
