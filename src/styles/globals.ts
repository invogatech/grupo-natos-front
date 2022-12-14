import styled, { createGlobalStyle } from 'styled-components';
import { colors, device, fontSize } from '@styles/variables'
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
    font-family: 'Marlin Geo SQ', sans-serif;

    @media (${device.desktopL}) {
      overflow-x: hidden;
      overflow-y: hidden;
    }

    /* width */
    *::-webkit-scrollbar, ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    *::-webkit-scrollbar-track, ::-webkit-scrollbar {
      background: #f1f1f1;
    }

    /* Handle */
    *::-webkit-scrollbar-thumb, ::-webkit-scrollbar {
      background: #888;
    }

    /* Handle on hover */
    *::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar {
      background: #555;
    }
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
  border-radius: 30px;
  padding: 1.25rem 0;
  
  width: 100%;
  height: 3.75rem;

  cursor: pointer;

  background: ${colors.mainBlue};
  

  color: #fff;
  font-size: ${fontSize.button};

  &:hover {
    background: ${darken(0.02, colors.mainBlue)};
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: ${colors.grey400};
  border: none;
  border-radius: 30px;
  padding: 1.125rem 1.1875rem;

  width: 100%;
  height: 3.75rem;

  color: ${colors.grey700};
  font-size: ${fontSize.input};

  &:focus {
    outline: none;
    border: 0.1px solid ${colors.grey500};
  }
`;

export const VerticalDivisor = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.grey200};
`;

export const HorizontalDivisor = styled.div`
  width: 1px;
  height: 100%;
  background: ${colors.grey200};
`;

export const Title = styled.h1`
  color: ${colors.titleGrey};
  font-size: ${fontSize.title};
  
`;

export const SubTitle = styled.h2`
  color: ${colors.textGrey};
  font-size: ${fontSize.subtitle};
  line-height: 150%;
`;

export const SectionTitle = styled.h2`
  color: black;
  font-size: ${fontSize.sectionTitleMobile};

  @media (${device.laptop}) {
    font-size: ${fontSize.sectionTitle};
  }
`;

export const Paragraph = styled.p`
  color: ${colors.textGrey};
  font-size: ${fontSize.paragraph};
  line-height: 150%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  z-index: 0;
  
  padding: 0rem 1.75rem;

  @media (${device.laptop}) {
    padding: 1.75rem 1.75rem;
  }

  @media (${device.desktopL}) {
    padding: 1.75rem 10vw;
    justify-content: center;
  }


`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 1rem;

  gap: 1rem;

  @media (${device.laptop}) {
    margin-bottom: 2.625rem;
    max-width: 78%;
    align-items: center;
    height: fit-content;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (${device.desktopL}) {
    max-width: 85%;
  }
`;