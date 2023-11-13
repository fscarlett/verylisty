import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function HomeSplash() {
  return (
    <>
      <div className={styles.home_splash_wrapper}>
        <h1>Verylisty</h1>
        <Link href='/account/register'>Sign Up For Free</Link>
        <p>or</p> {` `}
        <Link href='/account/login'>Login</Link>
        <div className={styles.home_items_wrapper}>
          <div className={styles.home_item}>It&apos;s free</div>
          <div className={styles.home_item}>It&apos;s focused</div>
          <div className={styles.home_item}>It&apos;s deep</div>
          <div className={styles.home_item}>It&apos;s bright</div>
        </div>
      </div>
    </>
  )
}
