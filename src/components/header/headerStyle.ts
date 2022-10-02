import { colors, device } from "@styles/variables";
import { darken } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  height: 3.25rem;
  width: 100%;

  padding: 2.75rem 1.75rem;

  background: none;

  @media (${device.laptop}) {
    position: fixed;
    right: 0;
    width: fit-content;
  }
`;

export const NavButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 100%;
  border: none;
  background: ${colors.grey400};

  width: clamp(2.75rem, 2vw, 3.125rem);
  height: clamp(2.75rem, 2vh, 3.125rem);

  min-width: 2.75rem;
  min-height: 2.75rem;

  .icon {
    color: black;
  }

  @media (${device.laptop}) {
    display: none;
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

      width: clamp(2.75rem, 2vw, 3.125rem);
      height: clamp(2.75rem, 2vh, 3.125rem);

      min-width: 2.75rem;
      min-height: 2.75rem;
  
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

    width: clamp(2.75rem, 2vw, 3.125rem);
    height: clamp(2.75rem, 2vh, 3.125rem);

    min-width: 2.75rem;
    min-height: 2.75rem;

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
    width: clamp(2.75rem, 2vw, 3.125rem);
    height: clamp(2.75rem, 2vh, 3.125rem);

    min-width: 2.75rem;
    min-height: 2.75rem;

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