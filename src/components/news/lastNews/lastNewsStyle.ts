import { colors } from "@styles/variables";
import styled from "styled-components";

export const LastNewsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 15.875rem;
  height: 17.8125rem;

  background: none;

  &:hover {
    cursor: pointer;
  }

  .news-tag {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 15px;
    left: 15px;
    
    background: white;
    padding: 0.3125rem 0.75rem;

    border-radius: 1.5625rem;

    font-weight: 700;
    font-size: 0.6875rem;

    z-index: 1;
  }

  .skeleton-tag {
    position: absolute;

    top: 15px;
    left: 15px;

    z-index: 1;
  }

  .news-img {
    position: relative;
    min-width: 15.875rem; 
    min-height: 60%;
    max-width: 15.875rem; 
    max-height: 60%;

    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;

    img {
      border-top-right-radius: 0.75rem;
      border-top-left-radius: 0.75rem;
    }
    
  }

  .news-content {
    display: flex;
    flex-direction: column;
    background: ${colors.mainBlue};
    justify-content: center;

    gap: 0.25rem;

    height: 40%;

    padding: 0.8125rem 1.125rem;

    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;

    .news-date {
      font-size: 0.6875rem;
      color: white;
    }

    .news-title {
      font-size: 1rem;
      color: white;
    }
  }
`;