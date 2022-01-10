import Head from 'next/head'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'

export default function Error() {
  return (
    <main>
      <Head>
        <title>Solon - Page not found</title>
      </Head>

      <center>
        <Title>404</Title>
        <Paragraph>Page not found</Paragraph>
      </center>

      <style jsx>{`
        main {
          margin-top: 160px;
          margin-bottom: 320px;
        }
      `}</style>
    </main>
  )
}
