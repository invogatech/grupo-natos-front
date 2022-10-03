import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Pendencias: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('pendencias')

  return (
    <Wrapper>
      <h1>Pendencias</h1>
    </Wrapper>
  )
}

export default Pendencias
