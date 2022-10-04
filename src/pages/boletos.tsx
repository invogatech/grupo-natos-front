import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';


const Boletos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('boletos')

  return (
    <MainWrapper>
      <h1>Boletos</h1>
    </MainWrapper>
  )
}

export default Boletos
