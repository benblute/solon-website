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
        <Title>The future of decentralized finance</Title>
        <Paragraph>Solon is creating the world&#39;s largest decentralized exchange for cryptocurrencies and NFTs. Our goal is to bring the entire world of DeFi under one ecosystem. </Paragraph>
      </Section>

      <Section image="/swap.svg" flip>
        <Title>Trade cryptocurrency simply and efficiently</Title>
        <Paragraph>Trade with zero protocol fees and a wide range of supported networks incuding Ethereum mainnet and layer 2 protocols.</Paragraph>
      </Section>

      <Section image="/pool.svg">
        <Title>Optimize liquidity provision with the world’s most versatile AMM</Title>
        <Paragraph>Create pools with more than two assets, concentrate liquidity to any price range, and mitigate impermanent loss with a new type of fee. Manage liquidity on behalf of others to earn a cut of their fees, or entrust your liquidity to some of the best pool managers in DeFi.</Paragraph>
      </Section>

      <Section image="/nfts.png" flip>
        <Title>Trade, rent, and fractionalize NFTs in our decentralized marketplace</Title>
        <Paragraph>Rent NFTs without the need to put up collateral, directly profit from your NFTs without the need to sell, take advantage of metaverse advertising space, host your venue in a developed metaverse space, and invest in popular NFT collections regardless of the floor price, all with zero protocol fees.</Paragraph>
      </Section>
    </main>
  )
}
