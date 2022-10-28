import { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import NotificationBellEmpty from "@public/assets/notificacoesHeader.svg"
import NotificationBellNew from "@public/assets/notificacaoNovaHeader.svg"
import NotificationBellEmptyDesktop from "@public/assets/notificacoesHeaderDesktop.svg"
import NotificationBellNewDesktop from "@public/assets/notificacaoNovaHeaderDesktop.svg"
import useNotificationsStore from "@stores/notifications";
import useSideBarStore from "@stores/sideBar"
import { AvatarItem, HeaderContainer, ItemsContainer, NavButton, NotificationItem } from "./headerStyle";
import NotificationPopUpComponent from "./notificationPopUp/notificationPopUpComponent"
import ProfilePopUpComponent from './profilePopUp/profilePopUpComponent'
import SearchBarComponent from '@components/searchBar/searchBarComponent'
import { useRouter } from 'next/router'

export default function HeaderComponent() {
  const notifications = useNotificationsStore((state) => state.notifications);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);

  const [ isNotificationPopUpOpen, setIsNotificationPopUpOpen ] = useState(false);
  const [ isProfilePopUpOpen, setIsProfilePopUpOpen ] = useState(false);

  const toggleNotificationPopUp = () => {
    setIsNotificationPopUpOpen(!isNotificationPopUpOpen);
  }

  const toggleProfilePopUp = () => {
    setIsProfilePopUpOpen(!isProfilePopUpOpen);
  }

  const profileRef = useRef<any>(null)

  const handleClickOutside = (event: any) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfilePopUpOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const router = useRouter();

  return (
    <HeaderContainer>
      <NavButton onClick={() => toggleSideBar()}>
        <AiOutlineMenu className="icon"/>
      </NavButton>
      <ItemsContainer>
        {router.asPath == "/noticias" && <SearchBarComponent />}
        <NotificationItem>
          <div className="notification-button-mobile">
            {notifications.length == 0 ? (<NotificationBellEmpty className="notification-icon-mobile"/>) : (<NotificationBellNew className="notification-icon-mobile"/>)}
          </div>
          <div onClick={() => setIsNotificationPopUpOpen(true)} className="notification-button-desktop">
            {notifications.length == 0 ? (<NotificationBellEmptyDesktop className="notification-icon"/>) : (<NotificationBellNewDesktop className="notification-icon"/>)}
          </div>
          {isNotificationPopUpOpen && <NotificationPopUpComponent closeNotificationPopUp={toggleNotificationPopUp}/>}
        </NotificationItem>
        <div className="item-divisor"></div>
        <AvatarItem>
          <img className="user-avatar" src="https://im.indiatimes.in/content/2020/Oct/Keanu-Reeves-as-Neo-in-Matrix1_5f9bc1284584e.jpg?w=725&h=452&cc=1"/>
          <BsChevronDown className="avatar-arrow" onClick={() => toggleProfilePopUp()}/>
          {isProfilePopUpOpen && (
          <div className="profile-popup" ref={profileRef}>
            <ProfilePopUpComponent/>
          </div>
          )}
        </AvatarItem>
      </ItemsContainer>
    </HeaderContainer>
  );
}