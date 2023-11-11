import Head from 'next/head'
import Script from 'next/script'
// import { useRouter } from 'next/router'

import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
// import styles from '@/styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  // const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        ></link>
        <link rel='manifest' href='/site.webmanifest'></link>
        <link
          href='https://use.fontawesome.com/35c241630a.css'
          media='all'
          rel='stylesheet'
        ></link>
        {/* <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        /> */}
      </Head>

      <Script src='https://use.fontawesome.com/35c241630a.js'></Script>

      <Header />

      {children}

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'verylisty | keep your priorites straight',
  description: 'not just another todo list app',
  keywords: 'task, todo, list, priority, verylisty, very listy',
}
