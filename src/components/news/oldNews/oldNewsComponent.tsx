import OldNewsImage from "@public/assets/oldNewsImage.jpg"
import { OldNewsWrapper } from "./oldNewsStyle"

export default function OldNewsComponent() {
  return (
    <OldNewsWrapper>
      <div className="news-info">
        <p className="news-tag">Curiosidade</p>
        <p className="news-title">Você conhece a Lei de multipropriedade?</p>
        <p className="news-date">22/06/2022</p>
      </div>
      <img className="news-img" src="https://dhojeinterior.com.br/wp-content/uploads/2019/12/2019-10-17_NATOS_OLPA_aerea.jpg" alt="news-img"/>
    </OldNewsWrapper>
  )
}