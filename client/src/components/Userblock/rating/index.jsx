import { useContext } from 'react';
import { FunctionsLink, RatingIsNotAuth, RatingTextWrapper } from './styles';
import PropTypes from 'prop-types';
import { Rating } from 'ui';
import { Context } from 'index';

export const UserblockRating = ({ userRate }) => {
  const { user } = useContext(Context);

  return (
    <>
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
    </>
  );
};

UserblockRating.propTypes = {
  userRate: PropTypes.number.isRequired,
};
