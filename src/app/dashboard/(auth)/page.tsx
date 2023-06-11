'use client'

import { FC, use, useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import styles from './page.module.css'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
  //       cache: 'no-store',
  //     })
  //     if (!res.ok) {
  //       setError(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then((res) => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)

  if (error) return <div>ошибка загрузки</div>
  if (isLoading) return <div>загрузка...</div>

  console.log(data)

  return <div>Dashboard</div>
}

export default Dashboard
