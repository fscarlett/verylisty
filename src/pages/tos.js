import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Account.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function TermsOfServicePage() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.account_container}>
          <h1>Verylisty - Terms Of Service</h1>
          <div className={styles.privacy_policy_content_wrapper}>
            <h2>Terms of Service</h2>
            <p>Effective date: November 11, 2023</p>
            <p>
              Verylisty ("us", "we", or "our") operates the Verylisty website
              (the "Service").
            </p>
            <p>By using the Service, you agree to be bound by these Terms.</p>

            <p>
              You may not use the Service for any illegal or unauthorized
              purpose nor may you, in the use of the Service, violate any laws
              in your jurisdiction (including but not limited to copyright).
            </p>

            <p>
              You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by us.
            </p>

            <p>
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </p>

            <p>
              You agree not to modify, adapt, reverse engineer or hack the
              Service or modify another website so as to falsely imply that it
              is associated with the Service.
            </p>

            <p>
              You agree to accept any and all risk associated with using the
              Service, including loss of data. You agree that the Service is
              provided free of any warranty or condition, express or implied,
              including fitness for a particular purpose.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
