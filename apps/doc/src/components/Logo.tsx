import PPResumeLogo from '@/resources/images/logo.svg'
import type { CSSProperties } from 'react'

interface LogoProps {
  height: number | string
  width: number | string
}

export function Logo({ height, width }: LogoProps) {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    width,
  }

  return (
    <div style={style}>
      <PPResumeLogo />
    </div>
  )
}
