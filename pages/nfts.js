import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Animate from '../components/Animate'
import { useMediaQuery } from 'react-responsive'
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

      <Spacer height="64px" />

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

      <Spacer height="88px" />

      <Animate>
        <Paragraph>The Solon NFTs were created to raise funds for an audit with Trail of Bits. For more information, visit our discord <a target="_blank" href="https://discord.gg/sQ9pcUyFbt">here</a>.</Paragraph>
      </Animate>

      <Spacer height="32px" />

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

        a {
          color: lightblue;
          text-decoration: underline;
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

      <Spacer height="16px" />

      <Title>{name}</Title>

      <Paragraph>
        {
          includeDetails ? (
            <>
              Length: {length} seconds
              <br />
              Solon: {solon} tokens
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
