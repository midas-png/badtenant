import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButtonWrapper,
  SidebarRoute,
  SidebarButton,
} from './styles';
import { Context } from '../../index';
import Cookies from 'js-cookie';

export const Sidebar = ({ isOpen, setReverse }) => {
  const { user } = useContext(Context);

  const logOut = () => {
    setReverse();
    Cookies.remove('token');
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Container isOpen={isOpen}>
      <Icon onClick={setReverse}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {user.isAuth && (
            <>
              <SidebarLink to='/account' onClick={setReverse}>
                My Account
              </SidebarLink>
              <SidebarLink
                to={`/advertisement/${user.user.id}`}
                onClick={setReverse}>
                My Advertisement
              </SidebarLink>
            </>
          )}
          <SidebarLink to="/search" onClick={setReverse}>
            Catalog
          </SidebarLink>
          <SidebarLink to="/about" onClick={setReverse}>
            About
          </SidebarLink>
          <SidebarLink to="/contact" onClick={setReverse}>
            Contacts
          </SidebarLink>
        </SidebarMenu>
        <SideButtonWrapper>
          {!user.isAuth ? (
            <>
              <SidebarRoute to="/signin" onClick={setReverse} primary="true">
                Sign In
              </SidebarRoute>
              <SidebarRoute to="/signup" onClick={setReverse}>
                Sign Up
              </SidebarRoute>
            </>
          ) : (
            <SidebarButton onClick={() => logOut()}>Log Out</SidebarButton>
          )}
        </SideButtonWrapper>
      </SidebarWrapper>
    </Container>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setReverse: PropTypes.func,
};

