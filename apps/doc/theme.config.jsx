import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { IconBrandDiscordFilled } from '@tabler/icons-react'
import Image from 'next/image'

const x2 = 8
const x6 = 24
const x8 = 32

const Logo = () => {
  return (
    <>
      <Image
        src="/static/assets/ppresume-logo-192x192.png"
        alt="PPResume"
        width={x8}
        height={x8}
        style={{ marginRight: x2 }}
      />
      <h1>PPResume</h1>
    </>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
const themeConfig = {
  // page <head>
  head: () => {
    const ppresumeDescription = [
      'a LaTeX based resume builder that',
      'helps people create beautifully typeset resumes in minutes.',
    ].join(' ')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath, defaultLocale, locale } = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig()

    const url =
      'https://docs.ppresume.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'PPResume'} />
        <meta
          property="og:description"
          content={frontMatter.description || ppresumeDescription}
        />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PPResume',
    }
  },

  // left side of navbar
  logo: <Logo />,

  // right side of navbar
  chat: {
    icon: <IconBrandDiscordFilled width={x6} height={x6} />,
    link: 'https://discord.gg/PzbunPPkVF',
  },
  project: {
    link: 'https://github.com/ppresume/community',
  },

  // sidebar
  sidebar: {
    toggleButton: true,
  },

  // footer
  footer: {
    text: `© 2023–${new Date().getFullYear()} PPResume`,
  },

  // doc repository base
  docsRepositoryBase:
    'https://github.com/ppresume/community/tree/main/apps/doc/',

  // dark mode
  darkMode: true,
}

export default themeConfig
