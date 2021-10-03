import { useRouter } from 'next/router'
import nftData from '../../json/nftDataByTokenId.json'

export default function handler(req, res) {
  const tokenId = req.query.tokenId
  const name = nftData[tokenId].name
  const length = (9 - name.length) * 5 + " seconds"
  const solon = nftData[tokenId].solon + " tokens"

  res.status(200).json({
    "name": name,
    "image": "https://arweave.net/tTgxSCbD8Ws30IrW0BX-_uml3wDdSjYa0csu8W0BqPw/" + name + ".mp4",
    "attributes": [
      {
        "trait_type": "Length",
        "value": length
      },
      {
        "trait_type": "Solon",
        "value": solon
      }
    ]
  })
}
