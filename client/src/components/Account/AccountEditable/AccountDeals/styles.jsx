import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const DealsWrapper = styled.div``;

export const DealsBlockWrapper = styled.div`
  margin-top: 30px;
  min-height: 200px;
  width: fit-content;
  min-width: 300px;
`;

export const DealsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ dealsNumber }) =>
    dealsNumber === 0 ? 'center' : 'flex-start'};
  align-items: center;
  background: #fff;
  height: 300px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  overflow-y: ${({ dealsNumber }) => (dealsNumber === 0 ? 'hidden' : 'scroll')};
`;

export const DealWrapper = styled.div`
  min-height: 120px;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
`;

export const InfoImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #c0c0c0;
`;

export const InfoName = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 23px;
`;

export const InfoStatistic = styled.p`
  text-align: center;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const StarStyle = css`
  text-decoration: none;
  color: #ff6700;
  height: 50px;
  width: 50px;
`;

export const StarEmpty = styled(BsStar)`
  ${StarStyle}
`;

export const StarFill = styled(BsStarFill)`
  ${StarStyle}
`;

export const StarHalf = styled(BsStarHalf)`
  ${StarStyle}
`;
