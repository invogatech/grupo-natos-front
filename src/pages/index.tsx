import HeaderComponent from '@components/header/headerComponent'
import SideBarComponent from '@components/sideBar/sideBarComponent'
import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Home: NextPage = () => {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);

  return (
    <Wrapper>
      <SideBarComponent/>
      <HeaderComponent/>
    </Wrapper>
  )
}

export default Home
