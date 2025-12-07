import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Orb from '@/components/Orb'

export function CallToAction() {
  return (
    <section
      id="support"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none"
        style={{
          width: '100%',
          height: '600px',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <Orb hoverIntensity={0.31} rotateOnHover hue={0} />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Bring the Quran into every moment.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Download Noor Al-Quran, create your library, and start streaming or
            downloading recitations within seconds.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#hero" color="white">
              Get Noor Al-Quran
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
