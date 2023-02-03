import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const colorButtonMap = {
  true: css`
    color: #000;
  `,
  false: css`
    color: #fff;
  `,
};

export const RadioLabel = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  align-self: flex-start;
`;

export const RadioInput = styled.input.attrs(() => ({
  type: 'radio',
}))`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.35em;
  height: 1.35em;
  border: 0.15em solid #000;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  ${(props) =>
    props.checked
      ? css`
          &::before {
            content: '';
            width: 0.65em;
            height: 0.65em;
            border-radius: 50%;
            transform: scale(1);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em #ff6700;
            animation: 120ms ${fadeIn} ease-in-out;
          }
        `
      : css`
          &:checked::before {
            transform: scale(0);
          }
        `}
`;

export const RadioLabelText = styled.label`
  ${({ isFontDark = 'false' }) => colorButtonMap[isFontDark]};
`;
