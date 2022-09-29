export const colors = {
  background: '#FFFFFF',
  mainBlue: '#0047BA',
  darkGrey: '#1A1C1E',
  grey400: '#F0F1F5',
  grey200: '#F3F3F3',
  grey500: '#a6a7a8',
  grey700: '#787878',
  transparentBlue: 'rgba(48, 85, 211, 0.09)',
  titleGrey: '#030303',
  textGrey: '#8C8C8C',
}

export const screenSize = {
  mobileS: '320px',
  mobileM: '480px',
  mobileL: '500px',
  tablet: '600px',
  tabletL: '801px',
  laptop: '1025px',
  desktop: '1281px'
}

export const device = {
  mobileS: `min-width: ${screenSize.mobileS}`,
  mobileM: `min-width: ${screenSize.mobileM}`,
  mobileL: `min-width: ${screenSize.mobileL}`,
  tablet: `min-width: ${screenSize.tablet}`,
  tabletL: `min-width: ${screenSize.tabletL}`,
  laptop: `min-width: ${screenSize.laptop}`,
  desktop: `min-width: ${screenSize.desktop}`,
  desktopL: `min-width: ${screenSize.desktop}`
};

export const landscapeDevice = {
  mobileS: `min-height: ${screenSize.mobileS}`,
  mobileM: `min-height: ${screenSize.mobileM}`,
  mobileL: `min-height: ${screenSize.mobileL}`,
  tablet: `min-height: ${screenSize.tablet}`,
  tabletL: `min-height: ${screenSize.tabletL}`,
  laptop: `min-height: ${screenSize.laptop}`,
  desktop: `min-height: ${screenSize.desktop}`,
  desktopL: `min-height: ${screenSize.desktop}`
}

export const fontSize = {
  title: 'clamp(1.9rem, 4vw, 2.125rem)',
  subtitle: 'clamp(1rem, 2.5vw, 1.125rem)',
  paragraph: 'clamp(0.975rem, 2vw, 1rem)',
  small: 'clamp(0.7rem, 1.5vw, 0.75rem)',
  button: 'clamp(0.975rem, 2vw, 1.125rem)',
  input: 'clamp(0.975rem, 2vw, 1.125rem)',
}