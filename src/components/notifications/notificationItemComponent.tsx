import { IoMdNotificationsOutline } from "react-icons/io";
import { NotificationsItem } from "./notificationItemStyle";

type NotificationType = {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
}

type PropsType = {
  notification: NotificationType;
}

export default function NotificationItemComponent({ notification }: PropsType) {
  const notificationDate = {
    day: notification?.createdAt.getDate(),
    month: notification?.createdAt.getMonth(),
    year: notification?.createdAt.getFullYear()
  }

  return (
    <NotificationsItem>
      <div className="notifications-item__wrapper">
        <div className="notifications-item__content">
          <section className="notification-icon">
            <IoMdNotificationsOutline className="icon"/>
          </section>
          <section className="notification-info">
            <p className="notification-info__title">{notification.title}</p>
            <p className="notification-info__description">{notification.message}</p>
          </section>
          <section className="notification-date">
            <p className="notification-date__date">{(notificationDate.month + 1) < 10 ? <p className="info-data">{notificationDate.day}/0{notificationDate.month + 1 }</p> : <p className="info-data">{notificationDate.day}/{notificationDate.month + 1}</p>}</p>
          </section>
        </div>
      </div>
    </NotificationsItem>
  )
}