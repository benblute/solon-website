import { useMediaQuery } from 'react-responsive'

export default function Paragraph({children}) {
  const medium = useMediaQuery({query: "(max-width: 1120px)"})
  const small = useMediaQuery({query: "(max-width: 880px)"})

  return (
    <>
      <p>{children}</p>

      <style jsx>{`
        p {
          font-size: ${medium ? small ? 1 : 1.1 : 1.2}em;
          opacity: 0.8;
        }
      `}</style>
    </>
  )
}
