import styled, { css } from 'styled-components/macro';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StarStyle = css`
  text-decoration: none;
  color: #ff6700;
  height: 45px;
  width: 45px;
`;

export const AppModalRatingWrapper = styled.div``;

export const EmptyFill = styled(BsStarFill)`
  ${StarStyle}
`;

export const EmptyHalf = styled(BsStarHalf)`
  ${StarStyle}
`;

export const EmptyStar = styled(BsStar)`
  ${StarStyle}
`;
