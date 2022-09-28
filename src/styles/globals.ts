import styled, { createGlobalStyle } from 'styled-components';
import { colors, fontSize, landscapeDevice } from '@styles/variables'
import { darken } from 'polished';

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body { 
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    background: ${colors.background};

    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }

  @-webkit-keyframes fadeIn { 
    0% { opacity: 0; }
    20% { opacity: 0; }
    40% { opacity: 0.3; }
    60% { opacity: 0.5; }
    80% { opacity: 0.9; }
    100% { opacity: 1; }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    20% { opacity: 0; }
    40% { opacity: 0.3; }
    60% { opacity: 0.5; }
    80% { opacity: 0.9; }
    100% { opacity: 1; }
  }

  @-webkit-keyframes fadeOut { 
    0% { opacity: 1; }
    20% { opacity: 1; }
    40% { opacity: 0.7; }
    60% { opacity: 0.5; }
    80% { opacity: 0.3; }
    100% { opacity: 0; }
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    20% { opacity: 1; }
    40% { opacity: 0.7; }
    60% { opacity: 0.5; }
    80% { opacity: 0.3; }
    100% { opacity: 0; }
  }
`;

export default GlobalStyle;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  
  width: 100%;
  height: 42px;

  cursor: pointer;

  background: ${colors.green};
  

  color: #fff;
  font-size: ${fontSize.button};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${darken(0.02, colors.green)};
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: #fff;
  border: 0.5px solid ${colors.strokeGray};
  border-radius: 5px;
  padding: 0.5rem 1rem;

  width: 100%;
  height: 36px;

  color: ${colors.gray};
  font-size: ${fontSize.paragraph};

  &:focus {
    outline: none;
    border: 0.75px solid ${colors.strokeGray};
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.strokeGray};

  @media ${landscapeDevice.mobileL} {
    display: none;
  }
`;