import { UserblockSpan, UserblockDataWrapper } from './styles';
import PropTypes from 'prop-types';

export const UserblockData = ({ userLocation, registrationDate, totalComments }) => {
  return (
    <UserblockDataWrapper>
      <UserblockSpan>{userLocation}</UserblockSpan>
      <UserblockSpan>Registration Date: {registrationDate}</UserblockSpan>
      <UserblockSpan>Total Comments: {totalComments}</UserblockSpan>
    </UserblockDataWrapper>
  );
};

UserblockData.propTypes = {
  userLocation: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  registrationDate: PropTypes.string.isRequired,
};

