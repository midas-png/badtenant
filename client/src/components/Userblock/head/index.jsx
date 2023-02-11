import { Assets } from 'assets';
import PropTypes from 'prop-types';
import {
  UserblockName,
  UserblockImage,
  UserblockImageWrapper,
  UserblockNameWrapper,
} from './styles';

export const UserblockHead = ({ userImage, userName }) => {
  return (
    <>
      <UserblockImageWrapper>
        <UserblockImage src={!userImage ? Assets.UserNoImage : userImage} />
      </UserblockImageWrapper>
      <UserblockNameWrapper>
        <UserblockName>{userName}</UserblockName>
      </UserblockNameWrapper>
    </>
  );
};

UserblockHead.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
};
