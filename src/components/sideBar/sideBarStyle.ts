import { colors, device } from "@styles/variables";
import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 70vw;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
  background: ${colors.darkGrey};
  z-index: 999;

  padding: 1rem 1.75rem;

  @media (${device.laptop}) {
    position: relative;
    padding: 1rem 1.75rem;
    transform: translateX(0);
    width: 80px;
    transition: width 0.3s ease;

    .logo-details {
      .logo {
        width: 0;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
    }

    &.open {
      width: 16.375rem;
      transition: width 0.3s ease-in-out !important;

      .logo-details {
        .logo {
          opacity: 1;
          width: 100%;
          transition: opacity 0.3s ease-in-out;
        }
      }
    }
  }

  
  &.open {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;

    ul li .item-information .item-name {
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s ease-in-out !important;
      transition-delay: 0.1s !important;
    }
  }
  
  .logo-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .toggle-icon {
      color: white;
      font-size: 1.5rem;
      transform: rotate(0);
      transition: transform 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
      }

      &.open {
        transform: rotate(180deg);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  .nav-list {
    margin-top: 20px;
    padding: 0;
    height: 100%;

    .list-title {
      color: ${colors.grey700};
    }

    li {
      position: relative;
      margin: 24px 0;
      list-style: none;
      width: fit-content;

      &.active {
        .item-information .item-name {
          color: white;
        }

        .item-information .item-icon {
          fill: white;
        }
      }

      .item-name {
        color: ${colors.grey700};
      }

      .item-icon {
        fill: ${colors.grey700};
      }

      &:hover {
        cursor: pointer;

        .item-name {
          color: white;
        }

        .item-icon {
          fill: white;
        }
      }

      .item-information {
        display: flex;
        gap: 1rem;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;

        .icon-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item-icon {
          width: 26px;
          transition: 0.4s;
        }

        .item-name {  
          font-size: 15px;
          white-space: nowrap;
          opacity: 0;
          width: 0;
          pointer-events: none;
          transition: 0.2s;
        }
      }
    }
  }



  
`;