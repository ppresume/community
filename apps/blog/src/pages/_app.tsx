import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <script
        defer
        data-domain="blog.ppresume.com"
        src="https://plausible.ppresume.com/js/script.js"
      ></script>
      <Component {...pageProps} />
    </>
  )
}
