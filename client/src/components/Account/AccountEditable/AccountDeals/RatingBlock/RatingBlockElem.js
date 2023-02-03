import styled from 'styled-components';

export const RatingBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RatingButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 17px;
`;
