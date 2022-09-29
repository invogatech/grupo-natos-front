import { colors, device, fontSize, landscapeDevice, screenSize } from '@styles/variables';
import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw; 
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: fit-content;
  height: fit-content;

  gap: 10%;
  padding: 0 1.25rem;

  @media (${device.tablet}) and (${landscapeDevice.tablet}) {
    padding: 0 2.5rem;
  }

  @media (${device.desktop}) {
    max-width: 70vw;
  }
`;

export const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 3.375rem;

  @media (${device.tablet}) and (${landscapeDevice.tablet}) {
    max-width: 60vw;
  }
`;

export const Explanation = styled.section`
  display: none;

  @media (${device.tablet}) and (${landscapeDevice.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    .texts {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }
  }
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
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

  gap: 0.3125rem;

  width: 100%;

  @media (${device.tablet}) and (${landscapeDevice.tablet}) {
    position: absolute;
    bottom: 5%;
  }

  p {
    color: #69686D;
  }

  a {
    text-decoration: none;
    color: #3661EB;
  }
`;

