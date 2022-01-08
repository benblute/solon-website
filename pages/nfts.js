import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import Animate from '../components/Animate'
import { useMediaQuery } from 'react-responsive'
import { useMoralis } from 'react-moralis'
import abi from '../json/solonNftsAbi.json'
import nftData from '../json/nftDataByName.json'

export default function NFTs() {
  const small = useMediaQuery({query: "(max-width: 880px)"})
  const [name, setName] = useState("A")

  return (
    <main>
      <Head>
        <title>Solon - NFTs</title>
      </Head>

      <Spacer height="16px" />

      <Animate>
        {
          small ? (
            <>
              <Video name={name} />
              <Spacer height="24px" />
              <Options name={name} setName={setName} />
              <Spacer height="24px" />
              <Menu name={name} setName={setName} />
            </>
          ) : (
            <div className="viewer">
              <div>
                <Video name={name} />
              </div>
              <Spacer width="24px" />
              <div className="viewer-menu">
                <Menu name={name} setName={setName} />
                <Spacer flexGrow="1" />
                <Options name={name} setName={setName} />
              </div>
            </div>
          )
        }
      </Animate>

      <Spacer height="32px" />

      <Section image="/blob2.png">
        <Title>Why purchase a Solon NFT?</Title>
        <Paragraph>
          Aside from the amazing 1/1 artificial intelligence generated art pieces, Solon NFT holders will also receive the following:
          <br /><br />
          <ul>
            <li>5% of the total supply of Solon will be distributed randomly to Solon NFT holders (there will be a function users can call at any point after our audit to withdraw the amount of Solon associated with their NFT)</li>
            <li>Exclusive access to an actively managed liquidity pool controlled by the team&apos;s top researchers</li>
            <li>Exclusive access to Solon in-person events</li>
            <li>Exclusive access to the Solon Boule in the metaverse</li>
            <li>Founders status in our ecosystem (@Boule)</li>
          </ul>
        </Paragraph>
      </Section>

      <Animate>
        <Title>What are the funds from the NFT sale being used for?</Title>
        <Paragraph>We are hiring Trail of Bits to audit our code and ensure there are no security flaws in our smart contracts. This audit will cost $320,000. All of the remaining funds are managed by the Boule: a DAO that allows every Solon NFT holder to vote on how the money is spent. You can vote to use it for investments, marketing, and eventually, dividends payments to NFT holders.</Paragraph>
      </Animate>

      <Section image="/blob3.png" flip>
        <Title>Current DAO holdings</Title>
        <Paragraph>
          <ul>
            <li>260 Solon NFTs</li>
            <li>ETH Balance: 2.6</li>
            <li>5 Strong Nodes: <a href="https://strongblock.com/">[Link]</a></li>
            <li>Bored Ape Yacht Club (BAYC) #9658: <a href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9658">[Link]</a></li>
            <li>Doodle #5249: <a href="https://opensea.io/assets/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/5249">[Link]</a></li>
            <li>Mutant Ape Yacht Club (MAYC) #2303: <a href="https://opensea.io/assets/0x60e4d786628fea6478f785a6d7e704777c86a7c6/2303">[Link]</a></li>
            <li>Pukenza #5249: <a href="https://opensea.io/assets/0x1e38e9ad28a526512af9b8689c50d91443b6c3db/5249">[Link]</a></li>
          </ul>
        </Paragraph>
      </Section>

      <style jsx>{`
        .viewer {
          display: flex;
        }

        .viewer > * {
          flex-basis: 0;
          flex-grow: 1;
          min-width: 0;
        }

        .viewer-menu {
          display: flex;
          flex-direction: column;
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

function Video({name}) {
  return (
    <>
      <video
        playsInline loop muted autoPlay
        src={"https://arweave.net/tTgxSCbD8Ws30IrW0BX-_uml3wDdSjYa0csu8W0BqPw/" + name + ".mp4"}
        poster={"https://arweave.net/riAF7gZb7uOdqIfvWm8xLORIej4c-CwI5RlYihCvseY/" + name + ".png"}
      />

      <style jsx>{`
        video {
          border-radius: 16px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

function Menu({name, setName}) {
  const tiny = useMediaQuery({query: "(max-width: 440px)"})

  const includeDetails = name in nftData

  const length = (9 - name.length) * 5
  const solon = includeDetails ? nftData[name].solon : ""
  const [owner, setOwner] = useState("...")

  const { Moralis } = useMoralis()

  useEffect(async function() {
    const web3 = await Moralis.enable()
    const contract = new web3.eth.Contract(abi, "0xb65Cf1744C9D041B475d3781F498331eF769aD98")
    if (includeDetails) {
      setOwner(await contract.methods.ownerOf(nftData[name].tokenId).call())
    }
  })

  return (
    <>
      <div className="buttons">
        <Button text="&#5176;" empty style={{padding: "20px"}} onClick={() => {
          if (name.length > 1) {
            setName(name.slice(0, -1))
          }
        }} />

        <div className="neural-network">
          <Button text="Minimal" empty={name[0] !== "A"} onClick={() => {
            if (name[0] !== "A") {
              setName("A" + name.substring(1))
            }
          }} />

          <Spacer width="24px" height="24px" />

          <Button text="Landscapes" empty={name[0] !== "B"} onClick={() => {
            if (name[0] !== "B") {
              setName("B" + name.substring(1))
            }
          }} />
        </div>
      </div>

      <Title>{name}</Title>

      <Paragraph>
        {
          includeDetails ? (
            <>
              Length: {length} seconds
              <br />
              Solon: {solon} tokens
              <br />
              Owner: {owner}
            </>
          ) : "Details not currently available"
        }
      </Paragraph>

      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: space-between;
        }

        .neural-network {
          display: flex;
          flex-direction: ${tiny ? "column" : "row"};
          align-items: flex-end;
        }
      `}</style>
    </>
  )
}

function Options({name, setName}) {
  const url = "https://arweave.net/riAF7gZb7uOdqIfvWm8xLORIej4c-CwI5RlYihCvseY/"
  return (
    <div className="container">
      <img src={url + name + "1.png"} onClick={() => {
        if (name.length < 8) {
          setName(name + "1")
        }
      }} />

      <Spacer width="24px" />

      <img src={url + name + "2.png"} onClick={() => {
        if (name.length < 8) {
          setName(name + "2")
        }
      }} />

      <Spacer width="24px" />

      <img src={url + name + "3.png"} onClick={() => {
        if (name.length < 8) {
          setName(name + "3")
        }
      }} />

      <style jsx>{`
        .container {
          display: ${name.length < 7 ? "flex" : "none"};
        }

        img {
          flex: 1;
          min-width: 0;
          object-fit: contain;
          border-radius: 16px;
          cursor: pointer;
          transition: transform 250ms;
        }

        img:hover {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  )
}
