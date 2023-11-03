import { CSSProperties } from 'react'
import Link from 'next/link'

export function Footer() {
  const footerStyle: CSSProperties = {
    borderTop: '1px solid #eaeaea',
    marginTop: '4rem',

    paddingTop: '2rem',
    paddingBottom: '2rem',

    display: 'flex',
    justifyContent: 'space-between',
  }

  const footerRightSectionStyle: CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
  }

  return (
    <footer style={footerStyle}>
      <div>
        2023 © <Link href={'https://ppresume.com'}>PPResume</Link>
      </div>
      <div style={footerRightSectionStyle}>
        <Link href={'https://discord.gg/PzbunPPkVF'}>Discord</Link>
        <Link href={'https://github.com/ppresume/community'}>Github</Link>
        <Link href={'https://twitter.com/PPResumeX'}>Twitter</Link>
      </div>
    </footer>
  )
}
