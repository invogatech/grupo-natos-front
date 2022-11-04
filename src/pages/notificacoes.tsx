import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals'
import { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { NotificationsWrapper } from '@styles/pages/notificacoes'
import NotificationItemComponent from '@components/notifications/notificationItemComponent'
import useNotificationsStore from '@stores/notifications'


const Notificacoes: NextPage = () => {
  const notifications = useNotificationsStore((state) => state.notifications)
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  const [ currentNotificationsPage, setCurrentNotificationsPage ] = useState('para-voce')

  const handleCurrentNotificationsPage = (page: string) => {
    if (page !== currentNotificationsPage) {
      setCurrentNotificationsPage(page)
    }
  }
  
  useEffect(() => {
    setCurrentPage('notificacoes')
  }, [])

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const sortedNotifications = notifications.sort(function(a, b) {
    return b.createdAt.getTime() - a.createdAt.getTime();
  })

  const monthsWithNotifications = sortedNotifications
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

    console.log(monthsWithNotifications)

  return (
    <MainWrapper>
      <h1>Notificações</h1>
        <NotificationsWrapper>
        <section className="notifications-pages">
          <div className={`notification-page ${currentNotificationsPage == "para-voce" ? "actived" : "deactived"}`} onClick={() => handleCurrentNotificationsPage("para-voce")}>
            <p>Para você</p>
          </div>
          <div className={`notification-page ${currentNotificationsPage == "avisos" ? "actived" : "deactived"}`} onClick={() => handleCurrentNotificationsPage("avisos")}>
            <p>Avisos</p>
          </div>
        </section>
        <section className="notifications">
          {monthsWithNotifications.map((month) => (
            <section className="notifications-month">
              <p className="month">{month.month} {month.year}</p>
              {sortedNotifications.map((notification) => {
                if (notification.createdAt.getMonth() === monthNames.indexOf(month.month) && notification.createdAt.getFullYear() === month.year) {
                  return (
                    <NotificationItemComponent notification={notification}/>
                  )
                }
              })}
            </section>
          ))}
        </section>
      </NotificationsWrapper>
    </MainWrapper>
  )
}

export default Notificacoes
