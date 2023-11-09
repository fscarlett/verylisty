import '@/styles/globals.css'
import Layout from '@/layouts/Layout'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
        {/* <Script src='https://use.fontawesome.com/35c241630a.js'></Script> */}
      </Layout>
    </main>
  )
}
