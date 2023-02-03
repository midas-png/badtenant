import React, { useContext } from 'react';
import {
  UserblockContainer,
  UserblockName,
  UserblockImage,
  UserblockImageWrapper,
  UserblockSpan,
  UserblockNameWrapper,
  UserblockHR,
  UserblockDataWrapper,
  FunctionsLink,
  RatingIsNotAuth,
  RatingTextWrapper,
} from './UserblockElem';
import Rating from './Rating';
import PropTypes from 'prop-types';
import DefaultImage from '../../images/test_image.jpg';
import { Context } from '../../index';

function Userblock({
  linkTo,
  userName,
  userLocation,
  userRate,
  userImage,
  totalComments,
  registrationDate,
}) {
  const { user } = useContext(Context);

  return (
    <UserblockContainer to={`/advertisement/${linkTo}`}>
      <UserblockImageWrapper>
        <UserblockImage src={!userImage ? DefaultImage : userImage} />
      </UserblockImageWrapper>
      <UserblockNameWrapper>
        <UserblockName>{userName}</UserblockName>
      </UserblockNameWrapper>
      <UserblockHR />
      <UserblockDataWrapper>
        <UserblockSpan>{userLocation}</UserblockSpan>
        <UserblockSpan>Registration Date: {registrationDate}</UserblockSpan>
        <UserblockSpan>Total Comments: {totalComments}</UserblockSpan>
      </UserblockDataWrapper>
      {user.isAuth ? (
        <RatingTextWrapper>
          <Rating rate={userRate} scale={55} />
        </RatingTextWrapper>
      ) : (
        <RatingTextWrapper>
          <RatingIsNotAuth>
            You are not authorized.
            <br />
            <FunctionsLink> Click here</FunctionsLink> to signin
          </RatingIsNotAuth>
        </RatingTextWrapper>
      )}
    </UserblockContainer>
  );
}

export default Userblock;

Userblock.propTypes = {
  linkTo: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userRate: PropTypes.number.isRequired,
  userImage: PropTypes.string,
  totalComments: PropTypes.number.isRequired,
  registrationDate: PropTypes.string.isRequired,
};
