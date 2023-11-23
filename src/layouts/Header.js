import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'

import localFont from 'next/font/local'
// const clashDisplay = localFont({
//   src: '../pages/ClashDisplay-Medium.woff2',
//   display: 'swap',
// })

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_brand_wrapper}>
        <Link href='/' className={`${styles.header_logo}`}>
          verylisty
        </Link>
      </div>
      <div className={styles.header_nav_wrapper}>
        <ul>
          <li>newitem</li>
          <li>newproject</li>
          <li>settings</li>
        </ul>
      </div>
    </header>
  )
}
