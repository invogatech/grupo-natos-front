import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Boletos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('boletos')

  return (
    <Wrapper>
      <h1>Boletos</h1>
    </Wrapper>
  )
}

export default Boletos
