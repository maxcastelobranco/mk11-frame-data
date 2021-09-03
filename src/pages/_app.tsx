import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NotationProvider from '../context/notationContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotationProvider>
      <Component {...pageProps} />
    </NotationProvider>
  )
}
export default MyApp
