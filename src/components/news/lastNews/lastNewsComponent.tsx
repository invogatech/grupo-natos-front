import { useRouter } from "next/router";
import { LastNewsWrapper } from "./lastNewsStyle";

type NewsType = {
  id: string;
  tag: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

type PropsType = {
  news: NewsType;
}

export default function LastNewsComponent( { news }: PropsType ) {
  const router = useRouter();
  const newsDate = {
    day: news.createdAt.getDate(),
    month: (news.createdAt.getMonth() + 1),
    year: news.createdAt.getFullYear()
  }


  return (
    <LastNewsWrapper onClick={() => router.push({
      pathname: '/noticia',
      query: { id: news.id },
    })}>
      <p className="news-tag">{news.tag}</p>
      <img className="news-img" src={news.image} alt="news-img" />
      <div className="news-content">
        {newsDate.month < 10 ? <p className="news-date">{newsDate.day}/0{newsDate.month}/{newsDate.year}</p> : <p className="news-date">{newsDate.day}/{newsDate.month}/{newsDate.year}</p>}
        <p className="news-title">{news.title}</p>
      </div>
    </LastNewsWrapper>
  )

}