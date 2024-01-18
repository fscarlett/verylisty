import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Account.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.account_container}>
          <h1>Verylisty - Privacy Policy</h1>
          <div className={styles.privacy_policy_content_wrapper}>
            <h2>Privacy Policy</h2>
            <p>Effective date: November 11, 2023</p>
            <p>
              Verylisty ("us", "we", or "our") operates the Verylisty website
              (the "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>

            <p>Ready?</p>

            <p>
              We use a cookie to let the app know if you&apos;re logged in.
              That&apos;s it.
            </p>

            <p>
              Obviously, whatever you enter into the list is saved in our
              datbase, so in theory we can look at that. But...
            </p>

            <p>
              We do not track your activity beyond what is necessary to keep the
              Service running, we do not sell (or give) your data to anyone,
              specifically we do not use your data for ad targeting or lead
              generation.
            </p>

            <p>The end.</p>
          </div>
        </div>
      </main>
    </>
  )
}
