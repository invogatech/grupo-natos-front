import OldNewsImage from "@public/assets/oldNewsImage.jpg"
import { useRouter } from "next/router";
import { OldNewsWrapper } from "./oldNewsStyle"

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

export default function OldNewsComponent( { news }: PropsType ) {
  const router = useRouter();
  const newsDate = {
    day: news.createdAt.getDate(),
    month: (news.createdAt.getMonth() + 1),
    year: news.createdAt.getFullYear()
  }

  return (
    <OldNewsWrapper onClick={() => router.push({
      pathname: '/noticia',
      query: { id: news.id },
    })}>
      <div className="news-info">
        <p className="news-tag">{news.tag}</p>
        <p className="news-title">{news.title}</p>
        {newsDate.month < 10 ? <p className="news-date">{newsDate.day}/0{newsDate.month}/{newsDate.year}</p> : <p className="news-date">{newsDate.day}/{newsDate.month}/{newsDate.year}</p>}
      </div>
      <img className="news-img" src={news.image} alt="news-img"/>
    </OldNewsWrapper>
  )
}