import { colors, device } from '@styles/variables';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  background: ${colors.grey400};
  border-radius: 30px;

  padding: 1.0625rem 1.375rem;

  @media (${device.laptop}) {
    display: flex;
    padding: 0.7375rem 1.1875rem;
    max-width: clamp(18rem, 20vw, 20.25rem);
    width: 100%;
  }

  gap: 0.625rem;

  .search-input {
    background: none;
    border: none;

    color: black;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.grey700};
    }
  }

  .search-icon {
    color: ${colors.grey700};
  }
`;