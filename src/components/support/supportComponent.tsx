import WhatsappIcon from "@public/assets/whatsapp-icon.svg"
import MailIcon from "@public/assets/mail-icon.svg"
import { BsChevronRight, BsChatRightDotsFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { SupportWrapper } from "./supportStyle"
import { useEffect, useRef, useState } from "react"

export default function SupportComponent() {
  const [ isSupportOpen, setIsSupportOpen ] = useState(false)

  // Close support when click outside
  const supportRef = useRef<any>(null)

  const handleClickOutside = (event: any) => {
    if (supportRef.current && !supportRef.current.contains(event.target)) {
      setIsSupportOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])



  return (
    <SupportWrapper>
      <div className="support-bubble" onClick={() => setIsSupportOpen(!isSupportOpen)}>
        {isSupportOpen ? <IoClose className="support-bubble__icon open"/> : <BsChatRightDotsFill className="support-bubble__icon closed"/>}

      </div>
      {isSupportOpen && (
      <div className="support-container" ref={supportRef}>
        <section className="support-section">
          <div className="main-content">
            <WhatsappIcon className="support-section__icon"/>
            <div>
              <p className="support-section__title">Whatsapp</p>
              <p className="support-section__description">Fale conosco através do Whatsapp</p>
            </div>
          </div>
          <BsChevronRight />
        </section>
        <section className="support-section">
          <div className="main-content">
            <MailIcon className="support-section__icon"/>
            <div>
              <p className="support-section__title">Gmail</p>
              <p className="support-section__description">Fale conosco através do e-mail</p>
            </div>
          </div>
          <BsChevronRight />
        </section>
      </div>
      )}
    </SupportWrapper>
  )
}