import styled, { css } from 'styled-components';

const sizeButtonMap = {
  small: css`
    padding: ${(props) => props.theme.buttonPadding.small};
  `,
  medium: css`
    padding: ${(props) => props.theme.buttonPadding.medium};
  `,
  large: css`
    padding: ${(props) => props.theme.buttonPadding.large};
  `,
  parent: css`
    height: 100%;
    width: 100%;
  `,
};

const borderRadiusMap = {
  small: css`
    border-radius: ${(props) => props.theme.borderRadius.small};
  `,
  medium: css`
    border-radius: ${(props) => props.theme.borderRadius.medium};
  `,
  large: css`
    border-radius: ${(props) => props.theme.borderRadius.large};
  `,
};

const fontSizeMap = {
  tiny: css`
    font-size: ${(props) => props.theme.fontSize.tiny};
  `,
  small: css`
    font-size: ${(props) => props.theme.fontSize.small};
  `,
  medium: css`
    font-size: ${(props) => props.theme.fontSize.medium};
  `,
  large: css`
    font-size: ${(props) => props.theme.fontSize.large};
  `,
};

const disabledMap = {
  primary: css`
    &:disabled {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.primary};
      cursor: default;
    }
  `,
  secondary: css`
    &:disabled {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      border: none;
      cursor: default;
    }
  `,
};

const colorTypeMap = {
  primary: css`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover:enabled {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  `,
  default: css`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover:enabled {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  `,
  secondary: css`
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.tertiary};

    &:hover:enabled {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  `,
  tertiary: css`
    background: ${(props) => props.theme.colors.default};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover:enabled {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  `,
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${(props) => props.theme.transitionAll};
  outline: none;
  cursor: pointer;

  ${({ size = 'parent' }) => sizeButtonMap[size]};
  ${({ typeColor = 'primary' }) => colorTypeMap[typeColor]};
  ${({ brType = 'small' }) => borderRadiusMap[brType]};
  ${({ font = 'small' }) => fontSizeMap[font]};
  ${({ typeDisabled = 'primary' }) => disabledMap[typeDisabled]};
`;
