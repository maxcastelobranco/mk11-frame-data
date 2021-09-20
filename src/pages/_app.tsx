import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NotationProvider from '../context/notationContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotationProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </NotationProvider>
  )
}
export default MyApp
