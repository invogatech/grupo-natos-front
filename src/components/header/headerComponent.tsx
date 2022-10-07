import Logo from "@public/assets/LogoNatos.svg";
import { useState } from 'react'
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

export default function HeaderComponent() {
  const notifications = useNotificationsStore((state) => state.notifications);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);
  const isSidebarOpen = useSideBarStore((state) => state.isSideBarOpen);

  const [ isNotificationPopUpOpen, setIsNotificationPopUpOpen ] = useState(false);
  const [ isProfilePopUpOpen, setIsProfilePopUpOpen ] = useState(false);

  const toggleNotificationPopUp = () => {
    setIsNotificationPopUpOpen(!isNotificationPopUpOpen);
  }

  const toggleProfilePopUp = () => {
    setIsProfilePopUpOpen(!isProfilePopUpOpen);
  }

  return (
    <HeaderContainer>
      <NavButton onClick={() => toggleSideBar()} className={isSidebarOpen ? "sidebar-open" : "sidebar-closed"}>
        <AiOutlineMenu className="icon"/>
        <Logo className="natos-logo"/>
      </NavButton>
      <ItemsContainer>
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
          {isProfilePopUpOpen && <ProfilePopUpComponent/>}
        </AvatarItem>
      </ItemsContainer>
    </HeaderContainer>
  );
}