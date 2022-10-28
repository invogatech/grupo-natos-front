import { colors } from "@styles/variables";
import styled from "styled-components"

export const SupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 30px;
  right: 30px;

  z-index: 3;

  .support-bubble {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.mainBlue};
    border-radius: 50%;
    width: 64px;
    height: 64px;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
      transition: box-shadow 0.2s ease-in-out;
    }

    .support-bubble__icon {
      color: white;

      &.closed {
        font-size: 24px;
      }

      &.open {
        font-size: 32px;
      }
    }
  }

  .support-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;

    background: white;
    border-radius: 25px;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

    top: -230px;
    left: -300px;

    padding: 1rem; 

    gap: 1.4375rem;

    z-index: 3;

    .support-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1rem;
      border-radius: 25px;
      box-shadow: 0;
      transition: all 0.2s ease-in-out;

      gap: 1rem;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease-in-out;
      }

      .main-content {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .support-section__icon {
        width: 49px;
        height: auto;
      }

      .support-section__title {
        font-size: 1.25rem;
        font-weight: bold;
      }

      .support-section__description {
        font-size: 12px;
        color: ${colors.grey500};
      }
    }
  }
`;
