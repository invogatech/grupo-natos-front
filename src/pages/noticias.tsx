import HeaderComponent from '@components/header/headerComponent'
import SideBarComponent from '@components/sideBar/sideBarComponent'
import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Noticias: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('noticias')

  return (
    <Wrapper>
      <h1>Noticias</h1>
    </Wrapper>
  )
}

export default Noticias
