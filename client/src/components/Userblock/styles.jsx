import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const UserblockContainer = styled(Link)`
  text-decoration: none;
  background: #fff;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  min-height: 350px;
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s;
  }

  @media screen and (max-width: 600px) {
    width: fit-content;
  }
`;

export const UserblockName = styled.span`
  text-decoration: none;
  font-weight: bold;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 40px;
  height: 1.2em;
  font-size: 20px;
  white-space: nowrap;
`;

export const UserblockImageWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserblockImage = styled.img`
  width: 50%;
  height: 100%;
`;

export const UserblockSpan = styled.span`
  text-decoration: none;
  color: #000;
`;

export const Rating = styled.div`
  grid-area: E;
  text-decoration: none;
`;

export const StarStyle = css`
  text-decoration: none;
  color: #ff6700;
`;

export const StarImage = styled.img`
  ${StarStyle}
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

export const RatingIsNotAuth = styled.span`
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  white-space: pre;
`;

export const FunctionsLink = styled.span`
  color: #ff6700;
  text-decoration: none;
`;

export const RatingTextWrapper = styled.div`
  grid-area: E;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const UserblockNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserblockHR = styled.hr`
  background: #000;
  border: none;
  height: 2px;
  width: 90%;
  border-radius: 1px;
`;

export const UserblockDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;
`;
