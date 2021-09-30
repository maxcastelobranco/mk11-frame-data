import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Mk11NotationProvider from '../mk11/context/notationContext'
import Head from 'next/head'
import MkxNotationProvider from '../mkx/context/notationContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Mk11NotationProvider>
      <MkxNotationProvider>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </MkxNotationProvider>
    </Mk11NotationProvider>
  )
}
export default MyApp
