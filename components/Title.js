import { useMediaQuery } from 'react-responsive'

export default function Title({children}) {
  const medium = useMediaQuery({query: "(max-width: 1120px)"})
  const small = useMediaQuery({query: "(max-width: 880px)"})

  return (
    <>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          font-size: ${medium ? small ? 2 : 2.5 : 3}em;
        }
      `}</style>
    </>
  )
}
