import Head from 'next/head'
import Link from 'next/link'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Animate from '../components/Animate'

export default function Governance() {
  return (
    <main>
      <Head>
        <title>Solon - Governance</title>
      </Head>

      <Animate>
        <center>
          <Title>This page is under construction</Title>
          <Paragraph>This part of the Solon ecosystem will be available to interact with after we complete our smart contract audit to ensure the safety of our users</Paragraph>
          <Spacer height="32px" />
          <div className="horizontal">
            <Link href="/nfts"><Button text="Check out our NFT sale" /></Link>
          </div>
        </center>
      </Animate>

      <style jsx>{`
        main {
          margin-top: 80px;
          margin-bottom: 160px;
        }

        .horizontal {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </main>
  )
}
