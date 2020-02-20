import get from 'lodash/get';

export default {
  colors: {
    primary: '#f50057',
    dark: '#000',
    font: '#000',
    grey: '#9b9b9b',
    greyLight: '#fafafa',
    white: '#fff',
    black: '#000',
    red: '#c03d3d',
    green: '#67baaf',
  },
  fonts: {
    pageHeading: '500 64px Roboto, sans-serif',
    text: '400 1rem Roboto, sans-serif',
  },
  easing: {
    in: 'cubic-bezier(.51,-0.21,.39,1.46)',
    out: 'cubic-bezier(.68,-0.5,.56,1.23)',
  },
  headerHeight: '8.5vh',
  footerHeigth: '4vh',
  layoutWidth: '90%',
};

export function themeVar(path) {
  return ({ theme }) => get(theme, path);
}

export function font(fontKey) {
  return themeVar(`fonts.${fontKey}`);
}

export function color(colorKey) {
  return themeVar(`colors.${colorKey}`);
}

export function easing(key) {
  return themeVar(`easing.${key}`);
}

export const animationName = 'animation';
