import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import { useMediaQuery } from 'react-responsive'

export default function NFTs() {
  const [name, setName] = useState("A")

  return (
    <main>
      <Head>
        <title>Solon - NFTs</title>
      </Head>

      <div className="viewer">
        <video
          className="video"
          playsInline loop muted autoPlay
          src={"/liquids/" + name + ".mp4"}
          poster={"/thumbnails/" + name + ".png"}
        />
        <Spacer width="24px" />
        <div className="viewer-menu">
          <div className="buttons">
            <Button text="&#5176;" empty onClick={() => {
              if (name.length > 1) {
                setName(name.slice(0, -1))
              }
            }} />
            <Spacer flexGrow="1" />
            <Button text="Minimal" empty={name[0] !== "A"} onClick={() => {
              if (name[0] !== "A") {
                setName("A" + name.substring(1))
              }
            }} />
            <Spacer width="24px" />
            <Button text="Landscapes" empty={name[0] !== "B"} onClick={() => {
              if (name[0] !== "B") {
                setName("B" + name.substring(1))
              }
            }} />
          </div>
          <Title>{name}</Title>
          <Paragraph>Owner: None</Paragraph>
          <Spacer flexGrow="1" />
          <div className="options">
            <img src={"/thumbnails/" + name + "1.png"} onClick={() => {
              if (name.length < 8) {
                setName(name + "1")
              }
            }} />
            <Spacer width="24px" />
            <img src={"/thumbnails/" + name + "2.png"} onClick={() => {
              if (name.length < 8) {
                setName(name + "2")
              }
            }} />
            <Spacer width="24px" />
            <img src={"/thumbnails/" + name + "3.png"} onClick={() => {
              if (name.length < 8) {
                setName(name + "3")
              }
            }} />
          </div>
        </div>
      </div>

      <Section image="/blob2.png">
        <Title>Why purchase a Solon NFT?</Title>
        <Paragraph>
          Aside from the amazing 1/1 artificial intelligence generated art pieces, Solon NFT holders will also receive the following:
          <br /><br />
          <ul>
            <li>5% of the total supply of Solon will be distributed randomly amongst Solon NFTs (there will be a function users can call at any point after our audit to withdraw the amount of Solon associated with their NFT)</li>
            <li>Exclusive access to an actively managed liquidity pool controlled by the teams top researchers</li>
            <li>Exclusive access to Solon in person events</li>
            <li>Exclusive access to the Solon Boule in the metaverse</li>
            <li>Founders status in our ecosystem (@Boule)</li>
          </ul>
        </Paragraph>
      </Section>

      <Section image="/blob3.png" flip>
        <Title>What is the price of a Solon NFT and how many can you purchase?</Title>
        <Paragraph>The price of a single Solon NFT will be 0.06 ETH + GAS. Each Solon NFT purchased after your initial purchase will be 0.01 ETH on top of the base price (0.06 ETH + (0.01 ETH * your balance of Solon NFTs) + GAS). Users can purchase a maximum of 10 Solon NFTs.</Paragraph>
      </Section>

      <Title>What are the funds from the NFT sale being used for?</Title>
      <Paragraph>Of the ~100 ETH the sale of Solon NFTs will raise we&apos;re using 50% of the funds for an audit of our smart contracts. We are hiring a top teir auditor to ensure there are no security flaws in our programs, and to have a notable outside firm validate our code. 25% of the funds will be used for purchasing and developing a decentralized Solon market (NFTs, Pools, and Exchanges) in a metaverse along with the Solon Boule, the remaining 25% will be used to fund other development expenses. There will be a 2.5% fee on secondary market sales, which will be used to fund in person events. Any remaining funds will go to the Solon governance pool for the community to vote on how best to use. There will be consistent public reports on how the funds raised from the sale are spent, every expense will be detailed.</Paragraph>

      <style jsx>{`
        .viewer {
          display: flex;
        }

        .video {
          flex-basis: 0;
          flex-grow: 1;
          min-width: 0;
          border-radius: 16px;
        }

        .viewer-menu {
          flex-basis: 0;
          flex-grow: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .buttons {
          display: flex;
        }

        .options {
          display: ${name.length < 7 ? "flex" : "none"};
        }

        .options > img {
          flex: 1;
          min-width: 0;
          object-fit: contain;
          border-radius: 16px;
          cursor: pointer;
        }

        li {
          background: url(/bullet.svg) no-repeat left top;
          padding: 4px 0px 0px 32px;
          list-style: none;
          transform: translate(-40px);
          text-align: left;
        }
      `}</style>
    </main>
  )
}
