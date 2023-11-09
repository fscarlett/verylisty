import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.home_splash_wrapper}>
          <h1>Verylisty</h1>
          <p>and it is... very listy...</p>
        </div>
      </main>
    </>
  )
}
