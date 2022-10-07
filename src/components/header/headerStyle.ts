import { colors, device } from "@styles/variables";
import { darken } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  
  width: 100%;
  height: fit-content;

  padding: 1.75rem 1.75rem;

  background: none;

  z-index: 1;

  @media (${device.laptop}) {
    padding: 1rem 1.75rem 0 1.75rem;
    height: fit-content;
  }
`;

export const NavButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 100%;
  border: none;
  background: ${colors.grey400};

  width: clamp(3rem, 2vw, 3.125rem);
  height: clamp(3rem, 2vh, 3.125rem);

  min-width: 3rem;
  min-height: 3rem;

  .icon {
    color: black;
  }
  
  .natos-logo {
    display: none;
  }

  @media (${device.laptop}) {
    display: flex;
    justify-content: flex-start;

    height: 60px;
    width: 16.375rem;

    background: ${colors.darkGrey};
    border-radius: 0;

    gap: 1.25rem;
    padding-left: 1.75rem;

    margin-top: -1rem;
    margin-left: -1.75rem;
    
    .icon {
      color: white;
      width: 20px;
      height: 20px;
    }

    .natos-logo {
      display: block;
      width: 80px;
    }
  }
`;

export const ItemsContainer = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 1.25rem;

  .item-divisor {
    display: none;
  }

  @media (${device.laptop}) {
    height: 100%;
    width: fit-content;
          
    .item-divisor {
      width: 1px;
      height: 2.25rem;
      display: block;
      border-radius: 100%;
      background: #E9E9E9;
    }
    
  }
`;

export const NotificationItem = styled.section`
  display: flex;

  .notification-button-desktop {
    display: none;

    @media (${device.laptop}) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;

      width: clamp(3rem, 2vw, 3.25rem);
      height: clamp(3rem, 2vh, 3.25rem);

      min-width: 3rem;
      min-height: 3rem;
  
      &:hover {
        border-radius: 100%;
        border: none;
        background: ${colors.grey400};
        cursor: pointer;
      }
  
      .notification-icon-mobile {
        display: none;
      }
  
      .notification-icon {
        display: block;
      }
    }
  }

  .notification-button-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: none;
    background: ${colors.grey400};

    width: clamp(3rem, 2vw, 3.25rem);
    height: clamp(3rem, 2vh, 3.25rem);

    min-width: 3rem;
    min-height: 3rem;

    .notification-icon-mobile {
      display: block;
    }

    .notification-icon {
      display: none;
    }

    @media (${device.laptop}) {
      display: none;
    }
  }

  
`;

export const AvatarItem = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  .user-avatar {
    object-fit: cover;
    width: clamp(3rem, 2vw, 3.125rem);
    height: clamp(3rem, 2vh, 3.125rem);

    min-width: 3rem;
    min-height: 3rem;

    border-radius: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .avatar-arrow {
    display: none;

    @media (${device.laptop}) {
      display: block;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;