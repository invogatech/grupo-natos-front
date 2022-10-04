import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';


const Empreendimento: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('empreendimento')

  return (
    <MainWrapper>
      <h1>Empreendimento</h1>
    </MainWrapper>
  )
}

export default Empreendimento
