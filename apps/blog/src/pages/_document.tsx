import { Html, Head, Main, NextScript } from 'next/document'
import { Favicon } from '@/components/common'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
