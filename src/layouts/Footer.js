import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'

import localFont from 'next/font/local'
// const clashDisplay = localFont({
//   src: '../pages/ClashDisplay-Medium.woff2',
//   display: 'swap',
// })

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_brand_wrapper}>
          <Link href='/' className={`${styles.footer_logo}`}>
            verylisty
          </Link>
        </div>
        <div className={styles.copyright}>Copyright ©2023 Fox Scarlett</div>
      </div>
    </footer>
  )
}
