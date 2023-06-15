import styled from 'styled-components/macro';
import 'react-datepicker/dist/react-datepicker.css';

export const AdvertisementWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(
    150deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 255, 255) 100%
  );
  padding-bottom: 50px;
`;

export const AdvertisementImage = styled.img`
  margin-top: 120px;
  background: #fff;
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 200px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    left: 5%;
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
`;

export const AdvertisementName = styled.span`
  color: #fff;
  font-size: 28px;
`;

export const AdvertisementComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  min-height: 100px;
  border-radius: 20px;
`;

export const CommentUnit = styled.div`
  font-size: 13.5px;
  grid-area: B;
`;

export const CommentWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentImage = styled.img`
  width: 50px;
  height: 50px;
  grid-area: A;
  border-radius: 25px;
  background: #ff6700;
`;

export const CommentContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 30px;
  flex-direction: column;
`;

export const AdvertisementFunctions = styled.div`
  display: flex;
  gap: 20px;
`;

export const FunctionLink = styled.span`
  font-size: 23px;
  color: #fff;
  cursor: pointer;
`;

export const FunctionHR = styled.hr`
  background: #fff;
  width: 2px;
  border-radius: 2px;
  border: none;
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 17%;
  left: 22%;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 5px;
  border-radius: 30px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  svg {
    height: 30px;
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    top: 14%;
    left: 5%;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 40px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 0px;
  padding: 20px;
  margin-top: 20px;
`;

export const UserNotLogonSpanWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  width: 80%;
`;

export const UserNotLogonSpan = styled.span`
  font-size: 18px;
  text-align: center;
`;
