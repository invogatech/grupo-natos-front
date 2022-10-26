import SkeletonComponent from "@components/skeleton/skeletonComponent";
import OldNewsImage from "@public/assets/oldNewsImage.jpg"
import Image from "next/image";
import { useRouter } from "next/router";
import { relative } from "path";
import { OldNewsWrapper } from "./oldNewsStyle"
import { useState } from "react";

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
  const [ isImageLoading, setIsImageLoading ] = useState(true);
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
        {isImageLoading ? (
          <SkeletonComponent width="64px" height="24px" type="text"/>
        ) : (
          <p className="news-tag">{news.tag}</p>
        )}

        {isImageLoading ? (
          <SkeletonComponent width="100%" height="42px" type="text"/>
        ) : (
          <p className="news-title">{news.title}</p>
        )}

        {isImageLoading ? (
          <SkeletonComponent width="64px" height="14px" type="text"/>
        ): (
        <p className="news-date">
          {newsDate.day}/{newsDate.month}/{newsDate.year}
        </p>
        )}
      </div>
      <div className="news-img-container">
        {isImageLoading && <SkeletonComponent width="100%" height="100%" type="image"/>}
        <Image className="news-img" src={`https://res.cloudinary.com/demo/image/fetch/${news.image}`} alt="news-img" objectFit="cover" layout="fill" onLoadingComplete={() => setIsImageLoading(false)}/>
      </div>
    </OldNewsWrapper>
  )
}