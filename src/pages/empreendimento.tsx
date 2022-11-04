import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals'
import { useEffect } from 'react'


const Empreendimento: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  
  useEffect(() => {
    setCurrentPage('empreendimento')
  }, [])

  return (
    <MainWrapper>
      <h1>Empreendimento</h1>
    </MainWrapper>
  )
}

export default Empreendimento
