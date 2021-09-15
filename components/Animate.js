import ScrollAnimation from 'react-animate-on-scroll'

export default function Animate({children}) {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      {children}
    </ScrollAnimation>
  )
}
