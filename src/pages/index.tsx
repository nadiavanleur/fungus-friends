import { Inter } from 'next/font/google'
import styles from './index.module.scss'
import dynamic from 'next/dynamic'
import DefaultHead from '@/components/DefaultHead'
import { useEffect, useState } from 'react'
import fetchMushrooms, { Mushroom, Color, Spots } from './api/mushrooms'
import Filter from '@/components/Filter'

const inter = Inter({ subsets: ['latin'] })
const Map = dynamic(() => import("../components/Map/index"), { ssr: false })

export type ColorFilter = Color | '';
export type SpotsFilter = Spots | '';
export type Filters = { color: ColorFilter, spots: SpotsFilter };

export default function Home() {
  const [mushrooms, setMushrooms] = useState<Mushroom[]>([])
  const [filters, setFilters] = useState<{ color: ColorFilter, spots: SpotsFilter }>({ color: '', spots: '' });

  const filteredMushrooms = mushrooms.filter((mushroom) => !Object.keys(filters).find((key) => {
    const filter = filters[key as keyof typeof filters];
    if (filter !== '' && filter !== mushroom[key as keyof Mushroom]) return true;
  }));

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

  return (
    <>
      <DefaultHead />
      <main className={`${styles.main} ${inter.className}`}>
        <Filter
          mushrooms={mushrooms}
          filters={filters}
          setFilters={setFilters}
        />
        <Map mushrooms={filteredMushrooms} />
      </main>
    </>
  )
}