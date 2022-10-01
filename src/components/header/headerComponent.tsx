import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import NotificationBellEmpty from "@public/assets/notificacoesHeader.svg"
import NotificationBellNew from "@public/assets/notificacaoNovaHeader.svg"
import NotificationBellEmptyDesktop from "@public/assets/notificacoesHeaderDesktop.svg"
import NotificationBellNewDesktop from "@public/assets/notificacaoNovaHeaderDesktop.svg"
import useNotificationsStore from "@stores/notifications";
import { AvatarItem, HeaderContainer, ItemsContainer, NavButton, NotificationItem } from "./headerStyle";

export default function HeaderComponent() {
  const notifications = useNotificationsStore((state) => state.notifications);

  console.log(notifications)


  return (
    <HeaderContainer>
      <NavButton>
        <AiOutlineMenu />
      </NavButton>
      <ItemsContainer>
        <NotificationItem>
          {notifications.length == 0 ? (<><NotificationBellEmpty className="notification-icon-mobile"/> <NotificationBellEmptyDesktop className="notification-icon"/></>) : (<><NotificationBellNew className="notification-icon-mobile"/> <NotificationBellNewDesktop className="notification-icon"/></>)}
        </NotificationItem>
        <div className="item-divisor"></div>
        <AvatarItem>
          <img className="user-avatar" src="https://im.indiatimes.in/content/2020/Oct/Keanu-Reeves-as-Neo-in-Matrix1_5f9bc1284584e.jpg?w=725&h=452&cc=1"/>
          <BsChevronDown className="avatar-arrow"/>
        </AvatarItem>
      </ItemsContainer>
    </HeaderContainer>
  );
}