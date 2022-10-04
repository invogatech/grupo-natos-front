import { LastNewsWrapper } from "./lastNewsStyle";

export default function LastNewsComponent() {
  return (
    <LastNewsWrapper>
      <p className="news-tag">Novidade</p>
      <img className="news-img" src="https://www.brasilfashionnews.com.br/wp-content/uploads/2020/11/@geral002posalta-800x480.jpg" alt="news-img" />
      <div className="news-content">
        <p className="news-date">22/06/2022</p>
        <p className="news-title">Kiteland: mais uma inovação para sua casa de férias</p>
      </div>
    </LastNewsWrapper>
  )

}