import { colors } from '@styles/variables';
import styled from 'styled-components';

export const NotificationsItem = styled.div`
  display: flex;
  width: 100%;
  height: 7.125rem;

  .notifications-item__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 1.6875rem;

    border-bottom: 1px solid ${colors.grey400};
  }

  .notifications-item__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    gap: 1.6875rem;
  }

  .notification-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    background: ${colors.transparentBlue}
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: ${colors.mainBlue};
  }

  .notification-info {
    display: flex;
    flex-direction: column; 
  }

  .notification-info__title {
    color: black;
    font-weight: 600;
  }

  .notification-info__description {
    color: ${colors.grey700};
    font-size: 0.9375rem;
  }

  .notification-date__date {
    color: ${colors.grey700};
    font-size: 0.75rem;
  }
`;