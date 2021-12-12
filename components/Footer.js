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
      <Animate>
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
      </Animate>
    </footer>
  )
}

function Solon() {
  return (
    <div className="container">
      <Image src="/logo.png" width="150px" height="52px" />
      <Paragraph>A new form of automated market maker that reinvents the way users deal with impermanent loss, the only risk in supplying liquidity</Paragraph>

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
        <Link href="https://medium.com/@solondefi?p=85ccc65320e2"><a>Docs</a></Link>
      </div>

      <div className="column">
        <h4>Social Media</h4>
        <Link href="https://twitter.com/SolonDeFi"><a>Twitter</a></Link>
        <Link href="https://discord.com/invite/NFHA2cgAYu"><a>Discord</a></Link>
      </div>

      <div className="column">
        <h4>Team</h4>
        <Link href="https://twitter.com/crypto__jesus_"><a>Max Lyman</a></Link>
        <Link href="https://twitter.com/benblute"><a>Ben Blute</a></Link>
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
