import { colors, device } from '@styles/variables';
import styled from 'styled-components';

export const OldNewsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  width: 100%;

  background: ${colors.grey400};
  border-radius: 0.875rem;

  gap: 0.625rem;

  @media (${device.laptop}) {
    flex-direction: column-reverse;
    justify-content: start;

    gap: 0.625rem;

    max-width: 16.1875rem;
    max-height: 22.9375rem;

    width: 16.1875rem;
    height: 22.9375rem;
  }

  .news-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.9375rem;

    margin-left: 1.375rem;

    @media (${device.laptop}) {
      justify-content: flex-start;
      
      gap: 0.375rem; 
      margin-left: 1.4375rem;
      margin-right: 1.4375rem;
    }

    .news-tag {
      width: fit-content;

      padding: 0.3125rem 0.625rem;
      border-radius: 1.5625rem;

      background: ${colors.mainBlue};
      color: white;
      font-size: 0.5625rem;
    }

    .news-title {
      font-weight: 600;
      color: black;
      font-size: clamp(0.9rem, 1.5vw, 1rem);
    }

    .news-date {
      color: #80828e;
      font-size: 0.75rem;
    }
  }

  .news-img {
    object-fit: cover;
    width: 8.4375rem;
    height: 8.25rem;

    margin: 0.3125rem;
    border-radius: 0.8125rem;

    @media (${device.laptop}) {
      width: 15.125rem;
      height: 14.25rem;

      margin: 0.5625rem;
    }

  }
`;