import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';


const Notificacoes: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('notificacoes')

  return (
    <MainWrapper>
      <h1>Notificacoes</h1>
    </MainWrapper>
  )
}

export default Notificacoes
