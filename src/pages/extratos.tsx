import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Extratos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('extratos')

  return (
    <Wrapper>
      <h1>Extratos</h1>
    </Wrapper>
  )
}

export default Extratos
