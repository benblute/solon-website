import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Spacer from './Spacer'
import Button from './Button'
import { useMoralis } from 'react-moralis'

export default function Header() {
  const medium = useMediaQuery({query: "(max-width: 1120px)"})
  const small = useMediaQuery({query: "(max-width: 880px)"})
  const [menu, setMenu] = useState(false)
  const router = useRouter()
  router.events.on('routeChangeStart', () => setMenu(false))

  return (
    <header>
      {
        medium ? (
          <>
            <div className="horizontal">
              <Logo />
              <Spacer flexGrow="1" />
              <MenuButton onClick={() => {setMenu(!menu)}} />
            </div>
            <Menu style={{
              display: medium && menu ? "flex" : "none",
              flexDirection: small ? "column" : "row"
            }} />
          </>
        ) : (
          <div className="horizontal">
            <Logo />
            <Spacer flexGrow="1" />
            <Menu style={{display: "flex"}} />
          </div>
        )
      }

      <style jsx>{`
        header {
          width: 100%;
          padding-top: 32px;
          padding-bottom: 32px;
        }

        .horizontal {
          display: flex;
          align-items: center;
        }
      `}</style>
    </header>
  )
}

function Logo() {
  return (
    <NavigationButton href="/">
      <Image src="/logo.png" width="150px" height="52px" />
    </NavigationButton>
  )
}

function Menu({style}) {
  return (
    <div className="container" style={style}>
      <NavigationButton href="/" dot><strong>Home</strong></NavigationButton>
      <NavigationButton href="/nfts" dot><strong>NFTs</strong></NavigationButton>
      <NavigationButton href="https://medium.com/@solondefi" dot><strong>Docs</strong></NavigationButton>
      <NavigationButton href="/vote" dot><strong>Vote</strong></NavigationButton>
      <Spacer width="64px" />
      <SocialMedia />
      <Spacer width="64px" />
      <ConnectToWallet />

      <style jsx>{`
        .container {
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

function MenuButton({onClick}) {
  return (
    <div className="container" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" style={{fill: "#000000"}}>
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M17.2,40.13333c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h137.6c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM17.2,80.26667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h137.6c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM17.2,120.4c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h137.6c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843z"></path></g></g>
      </svg>

      <style jsx>{`
        .container {
          height: 64px;
          padding-left: 16px;
          padding-right: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: transform 250ms;
        }

        .container:hover {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  )
}

function SocialMedia() {
  return (
    <div style={{display: "flex"}}>
      <NavigationButton href="https://twitter.com/SolonDeFi">
        <svg width="24" height="24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </NavigationButton>

      <NavigationButton href="https://discord.gg/sQ9pcUyFbt">
        <svg width="25" height="21" fill="currentColor">
          <path d="M23.6635 8.98897C22.6685 5.57012 21.5463 3.80361 21.5282 3.77192C21.4642 3.69385 19.8785 1.79619 16.0565 0.392578L15.5515 1.76758C17.3697 2.43535 18.6597 3.25 19.3691 3.77637C17.2511 3.1439 14.7315 2.75654 12.5 2.75654C10.2685 2.75654 7.74888 3.1439 5.63091 3.77637C6.34028 3.25005 7.63022 2.43535 9.44844 1.76758L8.94341 0.392578C5.12158 1.79619 3.53584 3.69385 3.47187 3.77192C3.45376 3.80361 2.33154 5.57012 1.33652 8.98897C0.377539 12.2837 0.0132324 16.9316 0 17.118C0.0854492 17.2516 2.05078 20.607 7.40688 20.607L8.7645 18.6411C7.24351 18.2373 5.79316 17.586 4.46553 16.7022L5.2772 15.4829C7.41904 16.9085 9.91665 17.6621 12.5 17.6621C15.0833 17.6621 17.581 16.9085 19.7228 15.4829L20.5345 16.7022C19.2069 17.586 17.7565 18.2373 16.2355 18.6411L17.5931 20.607C22.9492 20.607 24.9146 17.2516 25 17.118C24.9868 16.9316 24.6225 12.2837 23.6635 8.98897ZM9.11338 12.8211H7.64854V10.3797H9.11338V12.8211ZM17.3515 12.8211H15.8866V10.3797H17.3515V12.8211Z" />
        </svg>
      </NavigationButton>
    </div>
  )
}

function ConnectToWallet() {
  const [ popup, setPopup ] = useState(false)
  const { isAuthenticated, user, logout } = useMoralis()

  return (
    <>
      <Button
        text={isAuthenticated ? user.get('ethAddress').slice(0, 6) + "..." + user.get('ethAddress').slice(38) : "Connect to Wallet"}
        onClick={isAuthenticated ? logout : () => {setPopup(true)}}
      />

      {
        popup ? (
          <div className="popup" onClick={e => {if (e.target == e.currentTarget) setPopup(false)}}>
            <div className="inner-popup">
              <WalletButton text="MetaMask" setPopup={setPopup} />
              <Spacer height="16px" />
              <WalletButton text="WalletConnect" provider="walletconnect" setPopup={setPopup} />
            </div>
          </div>
        ) : ""
      }

      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .inner-popup {
          padding: 32px;
          background: #151F2B;
          border-radius: 16px;
        }
      `}</style>
    </>
  )
}

function WalletButton({text, provider, setPopup}) {
  const { authenticate, enableWeb3 } = useMoralis()

  return (
    <Button text={text} onClick={() => {
      authenticate({signingMessage: "Click sign to verify this is your wallet. This will not use any gas.", provider: provider})
      enableWeb3({provider: provider})
      setPopup(false)
    }} />
  )
}

function NavigationButton({children, href, dot}) {
  const router = useRouter()
  const selected = router.pathname === href

  return (
    <Link href={href}>
      <div className="container">
        {children}

        {dot && selected ? (
          <div className="dot">
            <Image src="/dot.png" layout="fill" />
          </div>
        ) : ""}

        <style jsx>{`
          .container {
            position: relative;
            padding-left: 16px;
            padding-right: 16px;
            height: 64px;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: color 250ms;
            color: ${selected ? "#b96215" : "white"};
          }

          .container:hover {
            color: #b96215;
          }

          .dot {
            width: 5px;
            height: 5px;
            position: absolute;
            top: 70%;
            left: 50%;
          }
        `}</style>
      </div>
    </Link>
  )
}
