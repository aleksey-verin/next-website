import { FC } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPostProps {
  params: {
    id: string
  }
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const data = await getData(params.id)
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image src='/image2.png' alt='' width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/image3.png' alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.body}</p>
      </div>
    </div>
  )
}

export default BlogPost
