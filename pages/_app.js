import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MoralisProvider } from 'react-moralis'
import { useState, useEffect } from 'react'

export default function App({Component, pageProps}) {
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <MoralisProvider appId="3wPikVhOhIomYvVcOxFtZIfHRTl1NW4wY2qX1mTS" serverUrl="https://twebye0t2um2.moralishost.com:2053/server">
      <center>
        <div className="container">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </center>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin-left: 5%;
          margin-right: 5%;
        }
      `}</style>
    </MoralisProvider>
  )
}
