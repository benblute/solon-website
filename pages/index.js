import Head from 'next/head'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Solon</title>
      </Head>

      <Section image="/blob1.png">
        <Title>A new type of <span className="orange">automated</span> market maker protocol</Title>
        <Paragraph>Solon is working to create the world&apos;s largest decentralized ecosystem, including the world’s first AMM with the ability to fully mitigate impermanent loss</Paragraph>
      </Section>

      <Section image="/swap.svg" flip>
        <Title>Trade cryptocurrency simply, and efficiently</Title>
        <Paragraph>The most competative rates in cryptocurrency trading. Switch between Ethereum and Polygon with the click of a button</Paragraph>
      </Section>

      <Section image="/pool.svg">
        <Title>Optimize liquidity provision with the world’s most versatile AMM</Title>
        <Paragraph>Control the level of impermanent loss, concentration, and the total number of assets within your pool in live time. Remove the educational barrier to entry for new users, enter any pool based on level of risk, and average APR. Direct preformance incentivization for managers, capatalize off of regulating pools for others while ensuring the best APR for users. Trade leveraged positions within liquidity pools (calls and puts)</Paragraph>
      </Section>

      <Section image="/nfts.png" flip>
        <Title>Buy, rent, and sell NFTs in our decentralized market place</Title>
        <Paragraph>Trade NFTs without protocol fees. Rent NFTs without the need to put up collateral. Directly profit from your NFTs without the need to sell. Take advantage of metaverse advertising space. Host your venue in a developed metaverse space. Derive artwork from popular NFT collections. Be exposed to our community through our home page as an emerging new artist</Paragraph>
      </Section>

      <style jsx>{`
        .orange {
          color: #b96215;
        }
      `}</style>
    </main>
  )
}
