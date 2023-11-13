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
        <div className={styles.footer_nav_wrapper}>
          <Link href='/privacy-policy' className={`${styles.footer_nav_item}`}>
            privacy policy
          </Link>
          <Link href='/tos' className={`${styles.footer_nav_item}`}>
            terms
          </Link>
        </div>
        <div className={styles.copyright}>
          Copyright ©2023{' '}
          <Link
            href='https://www.foxscarlett.com'
            target='_blank'
            noreferrer
            nofollow
          >
            Fox Scarlett
          </Link>
        </div>
      </div>
    </footer>
  )
}
