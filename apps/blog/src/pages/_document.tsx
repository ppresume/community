import { Html, Head, Main, NextScript } from 'next/document'
import { Favicon } from 'common'

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
