import HeaderComponent from '@components/header/headerComponent'
import SideBarComponent from '@components/sideBar/sideBarComponent'
import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'


const Home: NextPage = () => {

  return (
    <Wrapper>
      <SideBarComponent/>
      <HeaderComponent/>
    </Wrapper>
  )
}

export default Home
