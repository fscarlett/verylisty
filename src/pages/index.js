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
          <p>sign up or log in</p>
          <div className={styles.home_items_wrapper}>
            <div className={styles.home_item}>hello VL item</div>
            <div className={styles.home_item}>hello VL item</div>
            <div className={styles.home_item}>hello VL item</div>
          </div>
        </div>
      </main>
    </>
  )
}
