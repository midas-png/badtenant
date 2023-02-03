import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#ff6700',
    default: 'transparent',
    secondary: '#fff',
    tertiary: '#000',
    border: {
      primary: '2px solid #ff6700',
      secondary: '2px solid #fff',
      tertiary: '2px solid #000',
      disabled: '2px solid #757575',
    },
    hover: {
      primary: '#ffa366',
      secondary: '#bdbdbd',
      tertiary: '#fff',
    },
    disabled: {
      primary: '#757575',
      secondary: '#c0c0c0',
    },
    text: {
      primary: '#fff',
      secondary: '#ff6700',
      tertiary: '#000',
    },
  },
  transitionAll: 'all 0.25s ease-in-out',
  fontFamily: '"Rubik", sans-serif',
  buttonPadding: {
    large: '14px 48px',
    medium: '12px',
    small: '8px',
  },
  fontWeight: {
    large: '700',
    medium: '500',
    small: '300',
  },
  fontSize : {
    tiny: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  borderRadius: {
    small: '9px',
    medium: '20px',
    large: '50px',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
