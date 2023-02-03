import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

export const TariffsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  border-radius: 20px;
  height: ${({ isTop }) => (isTop ? '450px' : '400px')};
  width: ${({ isTop }) => (isTop ? '400px' : '350px')};
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: 0.3s transform ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80px;
`;

export const CardHeader = styled.h2``;

export const CardPrice = styled.h1`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const CardOldPrice = styled.h4`
  color: #c0c0c0;
  text-decoration: line-through;
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  gap: 10px;
`;

export const BenefitInto = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  min-height: 10px;
`;

export const CheckMarkIcon = styled(FiCheck)`
  font-size: 20px;
  color: ${({ isTop, value }) =>
    isTop && value === 1
      ? '#ff6700'
      : isTop && value === 0
        ? '#ffd1b2'
        : value === 1
          ? '#000'
          : '#c0c0c0'};
`;

export const CardButtonWrapper = styled.div`
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  background: ${({ isTop }) => (isTop ? '#ff6700' : 'transparent')};
  border: 2px solid #ff6700;
  border-radius: 20px;
  color: ${({ isTop }) => (isTop ? '#fff' : '#ff6700')};
  padding: 10px 0;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: ${({ isTop }) => (isTop ? '#ffa366' : '#ff6700')};
    ${({ isTop }) => isTop && 'border: 2px solid #ffa366;'}
    color: ${({ isTop }) => !isTop && '#fff'};
    cursor: pointer;
  }
`;
