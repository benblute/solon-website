import Head from 'next/head'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'

export default function Error() {
  const { web3, isWeb3Enabled, isAuthenticated, user, setUserData } = useMoralis()

  const [nftHolders, setNftHolders] = useState(true)
  const [coreDevelopersWeight, setCoreDevelopersWeight] = useState(1)
  const [miscellaneousWeight, setMiscellaneousWeight] = useState(1)
  const [publicSaleWeight, setPublicSaleWeight] = useState(1)
  const [usersWeight, setUsersWeight] = useState(1)

  const total = (coreDevelopersWeight + miscellaneousWeight + publicSaleWeight + usersWeight) * 100 / 95.092

  return (
    <main>
      <Head>
        <title>Solon - Page not found</title>
      </Head>

      <center>
        <Title>Solon Token Distribution</Title>
        {
          isWeb3Enabled && isAuthenticated ? (
            <>
              <Paragraph>Please read through this article before voting</Paragraph>
              <a href="https://www.benblute.com/posts/solon-token-distribution/" target="_blank">https://www.benblute.com/posts/solon-token-distribution/</a>
              <br />
              <Spacer height="64px" />
              <Paragraph>NFT holders: 4.908%</Paragraph>
              <input type="checkbox" checked={nftHolders} onClick={e => setNftHolders(!nftHolders)} />
              <Spacer height="24px" />
              <Paragraph>Core developers: {(100 * coreDevelopersWeight / total).toFixed(2)}%</Paragraph>
              <input type="number" value={coreDevelopersWeight} onInput={e => setCoreDevelopersWeight(parseFloat(e.target.value))} />
              <Spacer height="24px" />
              <Paragraph>Miscellaneous: {(100 * miscellaneousWeight / total).toFixed(2)}%</Paragraph>
              <input type="number" value={miscellaneousWeight} onInput={e => setMiscellaneousWeight(parseFloat(e.target.value))} />
              <Spacer height="24px" />
              <Paragraph>Public sale: {(100 * publicSaleWeight / total).toFixed(2)}%</Paragraph>
              <input type="number" value={publicSaleWeight} onInput={e => setPublicSaleWeight(parseFloat(e.target.value))} />
              <Spacer height="24px" />
              <Paragraph>Users: {(100 * usersWeight / total).toFixed(2)}%</Paragraph>
              <input type="number" value={usersWeight} onInput={e => setUsersWeight(parseFloat(e.target.value))} />
              <Spacer height="64px" />
              <Button text="Submit" onClick={async () => {
                var data = `616df967149d09cb13717e094aa9565eccc823fc:${nftHolders},${coreDevelopersWeight},${miscellaneousWeight},${publicSaleWeight},${usersWeight}`
                web3.eth.personal.sign(data, user.get('ethAddress')).then(signature => {
                  setUserData({
                    data: data,
                    signature: signature
                  })
                })
              }} />
            </>
          ) : (
            <Paragraph>Connect your wallet to vote</Paragraph>
          )
        }
      </center>

      <style jsx>{`
        main {
          margin-top: 80px;
          margin-bottom: 160px;
        }

        input {
          background: #151F2B;
          border: 2px solid white;
          border-radius: 32px;
          color: white;
          outline: none;
          text-align: center;
          -moz-appearance: textfield;
          height: 56px;
        }

        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
              -webkit-appearance: none; 
              margin: 0; 
        }
      `}</style>
    </main>
  )
}
