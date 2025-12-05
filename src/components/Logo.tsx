import Image from 'next/image'

type LogoProps = Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>

export function Logo({
  width = 160,
  height = 40,
  priority = true,
  ...props
}: LogoProps) {
  return (
    <Image
      src="/noor-logo.svg"
      alt="Noor Al-Quran logo"
      width={width}
      height={height}
      priority={priority}
      {...props}
    />
  )
}

export function Logomark({
  width = 40,
  height = 40,
  priority = true,
  ...props
}: LogoProps) {
  return (
    <Image
      src="/noor-icon.svg"
      alt="Noor Al-Quran icon"
      width={width}
      height={height}
      priority={priority}
      {...props}
    />
  )
}
