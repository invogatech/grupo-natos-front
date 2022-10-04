import { device } from '@styles/variables';
import styled from 'styled-components';

export const LastNewsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.25rem;

  margin-right: -1.75rem;

  @media (${device.laptop}) {
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
    gap: 1.25rem;
  }
`;