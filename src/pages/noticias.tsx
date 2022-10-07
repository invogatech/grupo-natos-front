import HeaderComponent from '@components/header/headerComponent'
import SideBarComponent from '@components/sideBar/sideBarComponent'
import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper, SectionTitle, Title, TitleSection } from '@styles/globals'
import SearchBarComponent from '@components/searchBar/searchBarComponent'
import LastNewsComponent from '@components/news/lastNews/lastNewsComponent'
import { LastNewsGrid, NewsContainer, OldNewsGrid } from '@styles/pages/noticias'
import OldNewsComponent from '@components/news/oldNews/oldNewsComponent'


const Noticias: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('noticias')

  return (
    <MainWrapper>
      <NewsContainer>
        <LastNewsGrid>
          <LastNewsComponent/>
          <LastNewsComponent/>
          <LastNewsComponent/>
          <LastNewsComponent/>
        </LastNewsGrid>
        <SectionTitle>Notícias Anteriores</SectionTitle>
        <OldNewsGrid>
          <OldNewsComponent/>
          <OldNewsComponent/>
          <OldNewsComponent/>
          <OldNewsComponent/>
        </OldNewsGrid>
      </NewsContainer>
    </MainWrapper>
  )
}

export default Noticias
