import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Notificacoes: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('notificacoes')

  return (
    <Wrapper>
      <h1>Notificacoes</h1>
    </Wrapper>
  )
}

export default Notificacoes
