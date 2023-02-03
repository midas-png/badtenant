import styled from 'styled-components';

export const AccountOffersWrapper = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  min-height: 100px;
  width: 100%;
`;

export const OffersHeaderWrapper = styled.div`
  height: 50px;
`;

export const OffersTitle = styled.h2`
  color: #fff;
`;

export const OffersPreTitle = styled.h4`
  color: #fff;
`;

export const OffersHR = styled.hr`
  border: none;
  width: ${({ small }) => (small ? '40%' : '70%')};
  height: 3px;
  border-radius: 2px;
  margin-top: 5px;
  background: #fff;
`;

export const OffersDataWrapper = styled.div`
  width: 100%;
`;

export const SentDealsWrapper = styled.div`
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(auto-fit, 150px);
  align-items: self-start;
  gap: 10px;
`;

export const PreTitleWrapper = styled.div`
  margin: 20px;
`;

export const OfferWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  height: 100px;
  border-radius: 30px;
  cursor: pointer;
`;

export const OfferImage = styled.img`
  background: #c0c0c0;
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const OfferDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 60%;
`;

export const OfferButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const OfferButton = styled.button`
  display: flex;
  jutify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#049104' : '#c20808')};
  white-space: nowrap;
  padding: 7px;
  color: #fff;
  outline: none;
  border: ${({ primary }) =>
    primary ? '2px solid #049104' : '2px solid #c20808'};
  cursor: pointer;
  min-width: 50px;

  &:hover {
    transition: all 0.2s;
    background: transparent;
    color: ${({ primary }) => (primary ? '#049104' : '#c20808')};
  }
`;
