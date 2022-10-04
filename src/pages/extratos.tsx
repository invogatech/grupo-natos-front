import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';


const Extratos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('extratos')

  return (
    <MainWrapper>
      <h1>Extratos</h1>
    </MainWrapper>
  )
}

export default Extratos
