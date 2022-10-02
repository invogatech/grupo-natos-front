import { useState } from "react"
import useNotificationsStore from "@stores/notifications";
import { Container, Header, Menu, MonthlyNotificationsSection, NotificationItem, NotificationsSection, Overlay, Wrapper } from "./notificationPopUpStyle";
import NotificationBell from "@public/assets/notificacoesPopUp.svg"

type NotificationPopUpProps = {
  closeNotificationPopUp: () => void;
}

export default function NotificationPopUpComponent({ closeNotificationPopUp }: NotificationPopUpProps) {
  const notifications = useNotificationsStore((state) => state.notifications);
  const [ currentMenu, setCurrentMenu ] = useState("forYou");

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const monthsWithNotifications =
    notifications
      .map((notification) => {
        const month = monthNames[notification.createdAt.getMonth()];
        const year = notification.createdAt.getFullYear();
        return { month, year };
      })
      .filter((notification, index, self) => {
        return (
          index ===
          self.findIndex(
            (t) => t.month === notification.month && t.year === notification.year
          )
        );
      });

    //Filter notification by month and year
    const filterNotifications = (month: string, year: number) => {
      return sortedNotifications.filter((notification) => {
        const notificationMonth = monthNames[notification.createdAt.getMonth()];
        const notificationYear = notification.createdAt.getFullYear();
        return notificationMonth === month && notificationYear === year;
      });
    };

    const sortedNotifications = notifications.sort(function(a, b) {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });

  return (
    <>
    <Overlay onClick={() => closeNotificationPopUp()}/>
    <Wrapper>
      <Container>
        <Header>
          <h1>Notificações</h1>
        </Header>
        <Menu>
          <p className={`${currentMenu == "forYou" ? "active" : ""}`} onClick={() => setCurrentMenu("forYou")}>Para Você</p>
          <p className={`${currentMenu == "advices" ? "active" : ""}`} onClick={() => setCurrentMenu("advices")}>Avisos</p>
        </Menu>
        <NotificationsSection>
          {monthsWithNotifications.map((month) => (
            <MonthlyNotificationsSection>
              <p className="notifications-month">{month.month} {month.year}</p>
            {filterNotifications(month.month, month.year).map((notification) => (
              <NotificationItem>
                <section className="notification-icon-section">
                <NotificationBell className="notification-icon"/>
                </section>
                <section className="notification-info-section">
                  <section className="notification-info-header">
                    <p className="notification-title">{notification.title}</p>
                    <p className="notification-created-date">{notification.createdAt.getDate()}/{notification.createdAt.getMonth() + 1 > 9 ? '' : '0'}{notification.createdAt.getMonth() + 1}</p>
                  </section>
                  <p className="notification-message">{notification.message}</p>
                </section>
              </NotificationItem>
            ))}
          </MonthlyNotificationsSection>
          ))}
        </NotificationsSection>
      </Container>
    </Wrapper>
    </>
  )
}