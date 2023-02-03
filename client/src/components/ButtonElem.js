import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  display: flex;
  jutify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#FF6700' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#FF6700')};
    color: ${({ primary }) => (primary ? '#FF6700' : '#fff')};
  }
`;

export const Button = styled(Link)`
  ${buttonStyle}
`;

export const ButtonRequest = styled.button`
  ${buttonStyle}
  width: 130px;
`;
