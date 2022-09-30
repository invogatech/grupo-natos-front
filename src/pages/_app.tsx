import GlobalStyle from '@styles/globals'
import type { AppProps } from 'next/app'
import '@styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
