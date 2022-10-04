import { colors } from '@styles/variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex; 

  position: absolute;
  top: 80px;
  right: 125px;

  width: 432px;
  max-height: 85vh;
  height: fit-content;
  
  z-index: 999;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-height: 85vh;

  background: white;
  padding: 1.9375rem;

  border-radius: 1.25rem;

  gap: 1.1875rem;

  z-index: 999;

  &::before {
	content: '';
	position: absolute;

	width: 0;
	height: 0;

	bottom: 100%;
	right: 2.2em;

	border: .75rem solid transparent;
	border-top: none;
	border-bottom-color: #fff;
  }
`;

export const Header = styled.header`
  display: flex;

  h1 {
    font-size: clamp(1.7rem, 4vw, 1.9rem);
  }
`;

export const Menu = styled.section`
  display: flex;

  gap: 3rem;
  padding: 0 1.9375rem 0.875rem 1.9375rem;
  margin-left: -1.9375rem;
  margin-right: -1.9375rem;

  width: auto;
  
  border-bottom: 2px solid ${colors.grey400};

  p {
    font-size: clamp(0.925rem, 2vw, 1rem);
    color: ${colors.textGrey};

    &:hover {
      cursor: pointer;
    }
  }

  p.active {
    color: ${colors.mainBlue};
    margin-bottom: -0.9375rem;
    border-bottom: 2px solid ${colors.mainBlue};
  }
`;

export const NotificationsSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.3125rem;

  margin-left: -1.9375rem;
  margin-right: -1.9375rem;

  height: 100%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
      width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MonthlyNotificationsSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.3125rem;

  .notifications-month {
    font-size: clamp(0.8rem, 2vw, 0.825rem);
    color: ${colors.textGrey};
    margin-left: 1.9375rem;
  }

`; 

export const NotificationItem = styled.section`
  display: flex;
  align-items: flex-start;

  gap: 1rem;

  border-bottom: 1px solid ${colors.grey400};
  padding-bottom: 1.3125rem;

  .notification-icon-section {
    display: flex;
  
    align-items: center;
    justify-content: center;

    background: ${colors.transparentBlue};

    width: 2.25rem;
    height: 2.25rem;
    min-width: 2.25rem;
    min-height: 2.25rem;

    border-radius: 100%;

    margin-left: 1.9375rem;

    .notification-icon {
      fill: ${colors.mainBlue};
      width: 50%;
      height: 50%;
    }
  }

  .notification-info-section {
    display: flex;
    flex-direction: column;

    margin-right: 1.9375rem;

    gap: 0.4375rem;

    width: 100%;

    .notification-info-header {
      display: flex;

      justify-content: space-between;
      align-items: center;

      width: 100%;

      .notification-title {
        color: black;
        font-weight: 600;
        font-size: clamp(0.875rem, 2vw, 0.9rem);
      }
      
      .notification-created-date {
        color: ${colors.textGrey};
        font-size: clamp(0.8rem, 2vw, 0.825rem);
      }
    }


    .notification-message {
      font-size: clamp(0.8rem, 2vw, 0.825rem);
      color: ${colors.textGrey};
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  
  position: absolute;
  top: 0;
  right: 0%;

  background: rgba(184, 184, 184, 0.61);
`;