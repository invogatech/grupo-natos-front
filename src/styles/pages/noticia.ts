import { colors, device } from "@styles/variables";
import styled from "styled-components"

export const NewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media (${device.laptop}) {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }

  .no-news {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${colors.grey700};
  }

  .news-image {
    margin-left: -1.75rem;
    margin-right: -1.75rem;
    margin-top: -6.5rem;

    @media (${device.laptop}) {
      margin: 0;
    }
  }

  .news-image img {
    width: 100%;
    height: 50vh;
    object-fit: cover;

    @media (${device.laptop}) {
      width: 460px;
      height: 405px;
      border-radius: 1.5625rem;
      object-fit: cover;
    }
  }

  .news-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: white;

    margin-left: -1.75rem;
    margin-right: -1.75rem;
    margin-top: -1.5rem;
    padding: 1.5rem;

    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;

    @media (${device.laptop}) {
      background: none;
      margin: 0;
      padding: 0;

      width: 50%;
    }
    
  }

  .news-content .news-date {
    color: ${colors.grey700};
    font-size: 0.875rem;
  }

  .news-content .news-text {
    color: ${colors.textGrey};
    line-height: 1.5rem;
    
    @media (${device.laptop}) {
      padding-right: 1.75rem;
      max-height: 60vh;
      overflow-y: auto;
    }
  }

  
`;