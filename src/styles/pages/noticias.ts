import { device } from '@styles/variables';
import styled from 'styled-components';

export const LastNewsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.25rem;

  margin-right: -1.75rem;

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

  @media (${device.laptop}) {
    display: flex;
    justify-content: center;
    gap: 3.125rem;
    margin-right: 0;
  }
`;

export const NewsContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.4375rem;

  @media (${device.laptop}) {
    gap: 2.1875rem;
  }
`;

export const OldNewsGrid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;

  @media (${device.laptop}) {
    flex-direction: row;
    justify-content: center;
    gap: 3.125rem;
  }
`;