import { colors, fontSize } from '@styles/variables';
import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 0 1.25rem;

  height: 100vh;
  width: 100vw;

  gap: 3.375rem;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  p {
    font-size: ${fontSize.subtitle};
    color: ${colors.textGrey};
  }

  h1 {
    font-size: ${fontSize.title};
    color: ${colors.titleGrey};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1.8125rem;

  input:first-child {
    margin-bottom: 1.25rem;
  }

  .second-section {
    p {
      font-size: ${fontSize.subtitle};
      color: #69686D;
      width: fit-content;

      :hover {
        color: ${darken(0.2, '#69686D')};
        cursor: pointer;
      }
    }

    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

`;

export const Footer = styled.section`
  display: flex;

  justify-content: center;

  position: absolute;
  bottom: 1.875rem;

  gap: 0.3125rem;

  width: 100%;

  p {
    color: #69686D;
  }

  a {
    text-decoration: none;
    color: #3661EB;
  }
`;