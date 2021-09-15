import Image from 'next/image'
import Spacer from './Spacer'
import Animate from './Animate'
import { useMediaQuery } from 'react-responsive'

export default function Section({children, image, flip}) {
  const small = useMediaQuery({query: "(max-width: 880px)"})

  return small ? (
    <Animate>
      {children}

      <Spacer height="64px" />

      <div className="image">
        <Image src={image} layout="fill" objectFit="contain" />
      </div>

      <Spacer height="64px" />

      <style jsx>{`
        .image {
          height: 70vw;
          position: relative;
        }
      `}</style>
    </Animate>
  ) : (
    <Animate>
      {
        flip ? (
          <div className="container">
            <div className="image">
              <Image src={image} layout="fill" objectFit="contain" />
            </div>
            <Spacer flexGrow="1" />
            <div className="text">
              {children}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="text">
              {children}
            </div>
            <Spacer flexGrow="1" />
            <div className="image">
              <Image src={image} layout="fill" objectFit="contain" />
            </div>
          </div>
        )
      }

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          text-align: left;
        }

        .text {
          flex-basis: 0;
          flex-grow: 7;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .image {
          flex-basis: 0;
          flex-grow: 9;
          position: relative;
          height: min(50vw, 600px);
          display: flex;
          align-items: center;
        }
      `}</style>
    </Animate>
  )
}
