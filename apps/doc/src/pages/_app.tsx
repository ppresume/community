import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        defer
        data-domain="docs.ppresume.com"
        src="https://plausible.textlib.app/js/script.js"
      ></script>
      <Component {...pageProps} />
    </>
  )
}
