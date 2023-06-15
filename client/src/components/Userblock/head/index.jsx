import { Assets } from 'assets';
import PropTypes from 'prop-types';
import {
  UserblockName,
  UserblockImage,
  UserblockImageWrapper,
  UserblockNameWrapper,
} from './styles';

export const UserblockHead = ({ userImage, userName }) => {
  const image = userImage
    ? `http://217.151.229.239:5000/${userImage}`
    : Assets.UserNoImage;
  return (
    <>
      <UserblockImageWrapper>
        <UserblockImage src={image} />
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
