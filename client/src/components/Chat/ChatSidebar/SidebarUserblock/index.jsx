import React from 'react';
import PropTypes from 'prop-types';
import {
  UserblockWrapper,
  ProfileUserPicture,
  ProfileUserName,
} from './styles';
import { Assets } from 'assets';

const SidebarUserblock = ({ id, activeDialoge, handleActiveDialoge }) => {
  return (
    <UserblockWrapper
      id={id}
      activeDialoge={activeDialoge}
      onClick={() => handleActiveDialoge(id)}>
      <ProfileUserPicture src={Assets.UserNoImage} />
      <ProfileUserName>John Johnson</ProfileUserName>
    </UserblockWrapper>
  );
};

export default SidebarUserblock;

SidebarUserblock.propTypes = {
  id: PropTypes.number,
  activeDialoge: PropTypes.bool,
  handleActiveDialoge: PropTypes.func,
};
