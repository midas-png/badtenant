import React from 'react';
import PropTypes from 'prop-types';
import {
  UserblockWrapper,
  ProfileUserPicture,
  ProfileUserName,
} from './SidebarUserblockElems';
import DefaultImage from '../../../../images/test_image.jpg';

const SidebarUserblock = ({ id, activeDialoge, handleActiveDialoge }) => {
  return (
    <UserblockWrapper
      id={id}
      activeDialoge={activeDialoge}
      onClick={() => handleActiveDialoge(id)}>
      <ProfileUserPicture src={DefaultImage} />
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
