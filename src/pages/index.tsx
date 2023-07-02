import { Inter } from 'next/font/google'
import styles from './index.module.scss'
import dynamic from 'next/dynamic'
import DefaultHead from '@/components/DefaultHead'
import { useEffect, useState } from 'react'
import fetchMushrooms, { Mushroom } from './api/mushrooms'
import SelectInput from '@/components/SelectInput'

const inter = Inter({ subsets: ['latin'] })
const Map = dynamic(() => import("../components/Map/index"), { ssr: false })

export default function Home() {
  const [mushrooms, setMushrooms] = useState<Mushroom[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMushrooms();
        setMushrooms(response);
      } catch (error) {
        console.error('Error fetching mushrooms:', error);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    console.log(mushrooms)
  }, [mushrooms])

  return (
    <>
      <DefaultHead />
      <main className={`${styles.main} ${inter.className}`}>
        <Map mushrooms={mushrooms} />
      </main>
    </>
  )
}