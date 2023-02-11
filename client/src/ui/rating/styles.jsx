import styled, { css } from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const StarStyle = css`
  text-decoration: none;
  color: #ff6700;
`;

export const StarFill = styled(BsStarFill)`
  width: ${({ scale }) => (scale ? '50px' : '30px')};
  height: ${({ scale }) => (scale ? '50px' : '30px')};
  ${StarStyle}
`;

export const StarHalf = styled(BsStarHalf)`
  width: ${({ scale }) => (scale ? '50px' : '30px')};
  height: ${({ scale }) => (scale ? '50px' : '30px')};
  ${StarStyle}
`;

export const StarEmpty = styled(BsStar)`
  width: ${({ scale }) => (scale ? '50px' : '30px')};
  height: ${({ scale }) => (scale ? '50px' : '30px')};
  ${StarStyle}
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240%;
  text-decoration: none;
`;
