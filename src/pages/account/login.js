import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Account.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function LoginPage() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.account_container}>
          <h1>Verylisty - Login</h1>
          <div className={styles.home_items_wrapper}>login form here</div>
        </div>
      </main>
    </>
  )
}
