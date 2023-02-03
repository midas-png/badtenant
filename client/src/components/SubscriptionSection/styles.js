import styled from 'styled-components';

export const SubscriptionSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  padding: 100px 0;
  background: linear-gradient(150deg, #ff6700 0%, #ffb98a 100%);
  width: 100%;
  min-height: 100vh;
`;

export const SubscriptionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
`;

export const SubscriptionHeader = styled.h1`
  color: #fff;
  font-size: 40px;
`;

export const SubscriptionPreHeader = styled.p`
  color: #fff;
  text-align: center;
`;

export const TariffsCardsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 70%;
  min-height: 100px;
`;
