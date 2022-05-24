import Paragraph from './Paragraph'
import Spacer from './Spacer'
import Image from 'next/image'
import Link from 'next/link'
import Animate from './Animate'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  const small = useMediaQuery({query: "(max-width: 880px)"})

  return (
    <footer>
      <Spacer height="64px" />
      <div className="container">
        <Solon />
        <Links />
      </div>
      <Spacer height="8px" />
      <Paragraph>&copy; 2021 Solon Finance</Paragraph>
      <Spacer height="8px" />

      <style jsx>{`
        .container {
          background: #151F2B;
          border-radius: 16px;
          display: flex;
          flex-direction: ${small ? "column" : "row"};
        }
      `}</style>
    </footer>
  )
}

function Solon() {
  return (
    <div className="container">
      <Image src="/logo.png" width="150px" height="52px" />
      <Paragraph>The future of decentralized finance</Paragraph>

      <style jsx>{`
        .container {
          flex-grow: 2;
          flex-basis: 0;
          padding: 32px;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  )
}

function Links() {
  const tiny = useMediaQuery({query: "(max-width: 440px)"})

  return (
    <div className="container">
      <div className="column">
        <h4>Pages</h4>
        <Link href="/"><a>Home</a></Link>
        <Link href="/nfts"><a>NFTs</a></Link>
        <a target="_blank" href="https://solon.gitbook.io/docs">Docs</a>
      </div>

      <div className="column">
        <h4>Social Media</h4>
        <a target="_blank" href="https://twitter.com/solonlabs">Twitter</a>
        <a target="_blank" href="https://discord.gg/sQ9pcUyFbt">Discord</a>
      </div>

      <div className="column">
        <h4>Team</h4>
        <a target="_blank" href="https://twitter.com/crypto__jesus_">Max Lyman</a>
        <a target="_blank" href="https://twitter.com/benblute">Ben Blute</a>
      </div>

      <style jsx>{`
        .container {
          flex-grow: 3;
          flex-basis: 0;
          display: flex
          ${tiny ? "flex-wrap: wrap;" : ""};
        }

        .column {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 32px;
        }

         h4 {
           margin-top: 24;
           margin-bottom: 24;
         }

         a {
           color: #777E90;
           margin-top: 16px;
         }
      `}</style>
    </div>
  )
}
