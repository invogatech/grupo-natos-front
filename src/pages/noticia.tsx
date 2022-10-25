import useNewsStore from '@stores/news';
import { MainWrapper } from '@styles/globals';
import { NewsContainer } from '@styles/pages/noticia';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Noticia: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const news = useNewsStore((state) => state.news)

  const currentNews = news.find((news) => news.id === id)


    const newsDate = {
      day: currentNews?.createdAt.getDate(),
      month: currentNews?.createdAt.getMonth(),
      year: currentNews?.createdAt.getFullYear()
    }
    
  return (
    <MainWrapper>
      {currentNews && newsDate.month ? (
      <NewsContainer>
        <section className="news-image">
          <img src={currentNews.image} alt="news-img" />
        </section>
        <section className="news-content">
          {(newsDate.month + 1) < 10 ? <p className="news-date">{newsDate.day}/0{newsDate.month + 1 }/{newsDate.year}</p> : <p className="news-date">{newsDate.day}/{newsDate.month + 1}/{newsDate.year}</p>}
          <h1 className="news-title">{currentNews.title}</h1>
          <section className="news-text">
            <p>{currentNews.content}</p>
          </section>
        </section>
      </NewsContainer>
      ) : (
        <NewsContainer>
          <div className="no-news">
            <h1>Notícia não encontrada</h1>
            </div>
        </NewsContainer>
        )}
    </MainWrapper>
  )
}

export default Noticia
