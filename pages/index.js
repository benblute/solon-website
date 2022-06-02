import Head from 'next/head'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import Animate from '../components/Animate'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Solon</title>
      </Head>

      <div className="title">
        <Animate>
          <Title>Decentralized gasless transactions on Ethereum and layer 2s</Title>
          <Paragraph>Launching Q3 2022</Paragraph>
        </Animate>
      </div>

      <Section image="/swap.svg" flip>
        <Title>Optimize swaps using liquidity sources across the entire blockchain</Title>
      </Section>

      <Section image="/pool.svg">
        <Title>Get the same returns as the best hedge fund managers in DeFi</Title>
      </Section>

      <Section image="/nfts.png" flip>
        <Title>Trade, rent, and fractionalize NFTs on a fully decentralized marketplace</Title>
      </Section>

      <Spacer height="32px" />

      <Animate>
        <Paragraph>Sign up <a target="_blank" href="http://eepurl.com/hYGPh5">here</a> to receive alerts about Solon.</Paragraph>
      </Animate>

      <Spacer height="32px" />

      <style jsx>{`
        .title {
          height: calc(100vh - 240px);
          max-width: 1000px;
          display: flex;
          align-items: center;
          margin-bottom: 120px;
        }

        a {
          color: lightblue;
          text-decoration: underline;
        }
      `}</style>
    </main>
  )
}
