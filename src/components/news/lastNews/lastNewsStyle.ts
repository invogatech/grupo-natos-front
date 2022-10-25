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
  }

  .news-img {
    object-fit: cover;
    width: 15.875rem; 
    height: 60%;
    
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
  }

  .news-content {
    display: flex;
    flex-direction: column;
    background: ${colors.mainBlue};
    justify-content: center;

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