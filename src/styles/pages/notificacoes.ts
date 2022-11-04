import { colors } from '@styles/variables';
import styled from 'styled-components';

export const NotificationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
  margin-top: 1.6875rem;
  margin-left: -1.6875rem;
  margin-right: -1.6875rem;

  .notifications-pages {
    display: flex;
    gap: 1.6875rem;
    border-bottom: 1px solid ${colors.grey400};
    padding-left: 1.6875rem;
    padding-right: 1.6875rem;
  }

  .notification-page {
    padding-bottom: 0.5rem;
    margin-bottom: -1px;
    
    &.actived {
      color: ${colors.mainBlue};
      border-bottom: 2px solid ${colors.mainBlue};
    }

    &.deactived {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .notifications {
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;
  }

  .notifications-month {
    display: flex;
    flex-direction: column;

    .month {
      margin-left: 1.6875rem;
      margin-right: 1.6875rem;
      color: ${colors.grey700};
    }
  }
`;