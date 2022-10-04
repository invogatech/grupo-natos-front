import { device } from '@styles/variables';
import styled from 'styled-components';

export const LastNewsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.25rem;

  margin-right: -1.75rem;

  ::-webkit-scrollbar {
      height: 8px;
  }

  @media (${device.laptop}) {
    display: flex;
    gap: 0.9375rem;
    margin-right: 0;
    padding-bottom: 10px;
  }

  @media (${device.desktopL}) {
    padding-bottom: 0px;
    justify-content: center;
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

  ::-webkit-scrollbar {
      height: 8px;
  }

  @media (${device.laptop}) {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.9375rem;
    padding-bottom: 10px;
  }

  @media (${device.desktopL}) {
    padding-bottom: 0px;
    justify-content: center;
  }
`;