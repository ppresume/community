import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react'

const x6 = 24

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
  // TODO: use PPResume svg logo here
  logo: <span>PPResume</span>,

  // right side of navbar
  chat: {
    link: 'https://discord.gg/PzbunPPkVF',
    icon: <IconBrandDiscord width={x6} height={x6} />,
  },
  project: {
    link: 'https://github.com/ppresume/community',
    icon: <IconBrandGithub width={x6} height={x6} />,
  },

  // sidebar
  sidebar: {
    toggleButton: true,
  },

  // doc repository base
  docsRepositoryBase:
    'https://github.com/ppresume/community/tree/main/apps/doc/',

  // dark mode
  darkMode: true,
}

export default themeConfig
