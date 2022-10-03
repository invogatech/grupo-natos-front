import GlobalStyle from '@styles/globals'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import '@styles/fonts.css';
import SideBarComponent from '@components/sideBar/sideBarComponent';
import HeaderComponent from '@components/header/headerComponent';
import { Wrapper } from '@styles/pages';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
    <Wrapper>
      <GlobalStyle/>
      {router.asPath !== '/signIn' && (
        <>
          <SideBarComponent/>
          <HeaderComponent/>
        </>
      )}
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
