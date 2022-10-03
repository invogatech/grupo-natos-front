import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'


const Empreendimento: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('empreendimento')

  return (
    <Wrapper>
      <h1>Empreendimento</h1>
    </Wrapper>
  )
}

export default Empreendimento
