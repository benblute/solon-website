import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DAppProvider } from '@usedapp/core'

export default function App({Component, pageProps}) {
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <DAppProvider>
      <center>
        <div className="container">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>

        <style jsx>{`
          .container {
            max-width: 1200px;
            margin-left: 5%;
            margin-right: 5%;
          }
        `}</style>
      </center>
    </DAppProvider>
  )
}
