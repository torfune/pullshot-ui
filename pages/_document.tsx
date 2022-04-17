import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Foosball pubs in Prague.</title>
        <link
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
          rel="preconnect"
        />
        <link
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Rubik+Moonrocks&display=swap"
          crossOrigin="anonymous"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
