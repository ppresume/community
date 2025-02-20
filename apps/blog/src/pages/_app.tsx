import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { MDXEmbedProvider } from 'mdx-embed'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXEmbedProvider>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <script
        defer
        data-domain="blog.ppresume.com"
        src="https://plausible.ppresume.com/js/script.js"
      ></script>
      <Component {...pageProps} />
    </MDXEmbedProvider>
  )
}
