import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper, SectionTitle, Title, TitleSection } from '@styles/globals'
import LastNewsComponent from '@components/news/lastNews/lastNewsComponent'
import { LastNewsGrid, NewsContainer, OldNewsGrid } from '@styles/pages/noticias'
import OldNewsComponent from '@components/news/oldNews/oldNewsComponent'
import useNewsStore from '@stores/news'
import { useState, useEffect } from 'react'

type NewsType = {
  id: string;
  tag: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

const Noticias: NextPage = () => {
  const news = useNewsStore((state) => state.news)
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('noticias')

  const [ lastNews, setLastNews ] = useState<NewsType[]>([])
  const [ oldNews, setOldNews ] = useState<NewsType[]>([])

  useEffect(() => {

    if (news.length > 0) {
      // Filter just the news that are creadetAt at least 7 days ago
      const filteredOldNews = news.filter((news) => {
        const date = new Date(news.createdAt)
        const today = new Date()
        const diffTime = Math.abs(today.getTime() - date.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays > 7
      })

      // Filter just the news that are creadetAt at less 7 days ago
      const filteredLastNews = news.filter((news) => {
        const date = new Date(news.createdAt)
        const today = new Date()
        const diffTime = Math.abs(today.getTime() - date.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays <= 7
      })

      setLastNews(filteredLastNews)
      setOldNews(filteredOldNews)
    }
  }, [])

  return (
    <MainWrapper>
      <NewsContainer>
        <LastNewsGrid>
          {lastNews.map((news) => (
            <LastNewsComponent key={news.id} news={news} />
          ))}
        </LastNewsGrid>
        <SectionTitle>Notícias Anteriores</SectionTitle>
        <OldNewsGrid>
          {oldNews.map((news) => (
            <OldNewsComponent key={news.id} news={news} />
          ))}
        </OldNewsGrid>
      </NewsContainer>
    </MainWrapper>
  )
}

export default Noticias
