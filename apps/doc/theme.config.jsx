import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

// eslint-disable-next-line import/no-anonymous-default-export
const themeConfig = {
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
  logo: <span>PPResume</span>,
  project: {
    link: 'https://github.com/ppresume/community',
  },
  docsRepositoryBase:
    'https://github.com/ppresume/community/tree/main/apps/doc/',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PPResume',
    }
  },
}

export default themeConfig
