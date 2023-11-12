import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Account.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AccountPage() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.account_container}>
          <h1>Verylisty - My Account</h1>
          <div className={styles.home_items_wrapper}>account stuff here</div>
        </div>
      </main>
    </>
  )
}
