import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals'
import { useEffect } from 'react'


const Pendencias: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  
  useEffect(() => {
    setCurrentPage('pendencias')
  }, [])

  return (
    <MainWrapper>
      <h1>Pendencias</h1>
    </MainWrapper>
  )
}

export default Pendencias
