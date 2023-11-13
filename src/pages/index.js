import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.home_splash_wrapper}>
          <h1>Verylisty</h1>
          <Link href='/account/register'>Sign Up For Free</Link>
          <p>or</p> {` `}
          <Link href='/account/login'>Login</Link>
          <div className={styles.home_items_wrapper}>
            <div className={styles.home_item}>It&apos;s free</div>
            <div className={styles.home_item}>It&apos;s focused</div>
            <div className={styles.home_item}>It&apos;s deep</div>
          </div>
        </div>
      </main>
    </>
  )
}
