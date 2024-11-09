import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MDXEmbedProvider } from 'mdx-embed'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXEmbedProvider>
      <script
        defer
        data-domain="docs.ppresume.com"
        src="https://plausible.ppresume.com/js/script.js"
      ></script>
      <Component {...pageProps} />
    </MDXEmbedProvider>
  )
}
