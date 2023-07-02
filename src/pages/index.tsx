import { Inter } from 'next/font/google'
import styles from './index.module.scss'
import dynamic from 'next/dynamic'
import DefaultHead from '@/components/DefaultHead'
import { useState } from 'react'
import { Mushroom } from './api/api'

const inter = Inter({ subsets: ['latin'] })
const Map = dynamic(() => import("../components/Map/index"), { ssr: false })

export default function Home() {
  const [mushrooms, setMushrooms] = useState<Mushroom[]>([])

  return (
    <>
      <DefaultHead />
      <main className={`${styles.main} ${inter.className}`}>
        <Map />
      </main>
    </>
  )
}
