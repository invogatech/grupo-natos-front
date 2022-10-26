import { useRouter } from "next/router";
import { LastNewsWrapper } from "./lastNewsStyle";
import Image from "next/image";
import { useState } from "react";
import SkeletonComponent from "@components/skeleton/skeletonComponent";

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
  const [ isImageLoading, setIsImageLoading ] = useState(true);
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
      {isImageLoading ? (
        <div className="skeleton-tag">
          <SkeletonComponent width="64px" height="24px" type="text"/>
        </div>
      ) : (
        <p className="news-tag">{news.tag}</p>
      )}

      <div className="news-img">
        {isImageLoading && <SkeletonComponent width="100%" height="100%" type="image"/>}
        <Image src={`https://res.cloudinary.com/demo/image/fetch/${news.image}`} alt="news-img" layout="fill" objectFit="cover" onLoadingComplete={() => setIsImageLoading(false)}/>
      </div>
      <div className="news-content">
        {isImageLoading ? (
          <SkeletonComponent width="64px" height="14px" type="text"/>
        ): (
        <p className="news-date">
          {newsDate.day}/{newsDate.month}/{newsDate.year}
        </p>
        )}
        
        {isImageLoading ? (
          <SkeletonComponent width="100%" height="42px" type="text"/>
        ) : (
          <p className="news-title">{news.title}</p>
        )}
      </div>
    </LastNewsWrapper>
  )

}