import { UserblockWrapper, UserblockDivideLine } from './styles';
import { UserblockHead } from './head';
import { UserblockData } from './data';
import { UserblockRating } from './rating';
import PropTypes from 'prop-types';

export const Userblock = ({
  linkTo,
  userName,
  userLocation,
  userRate,
  userImage,
  totalComments,
  registrationDate,
}) => {
  return (
    <UserblockWrapper to={`/advertisement/${linkTo}`}>
      <UserblockHead userName={userName} userImage={userImage} />
      <UserblockDivideLine />
      <UserblockData
        userLocation={userLocation}
        totalComments={totalComments}
        registrationDate={registrationDate}
      />
      <UserblockRating userRate={userRate} />
    </UserblockWrapper>
  );
};

Userblock.propTypes = {
  linkTo: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userRate: PropTypes.number.isRequired,
  userImage: PropTypes.string,
  totalComments: PropTypes.number.isRequired,
  registrationDate: PropTypes.string.isRequired,
};
