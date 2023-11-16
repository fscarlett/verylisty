import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import HomeSplash from '@/components/HomeSplash'
import List from '@/components/List'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let loggedIn = false
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        {loggedIn ? <List /> : <HomeSplash />}
      </main>
    </>
  )
}
