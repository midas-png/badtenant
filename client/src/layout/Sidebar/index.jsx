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
    <Container isOpen={isOpen} onClick={setReverse}>
      <Icon onClick={setReverse}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {user.isAuth && (
            <>
              <SidebarLink to={`/account/${user.user.id}`} onClick={setReverse}>
                My Account
              </SidebarLink>
              <SidebarLink
                to={`/advertisement/${user.user.id}`}
                onClick={setReverse}>
                My Advertisement
              </SidebarLink>
            </>
          )}
          <SidebarLink to="/about" onClick={setReverse}>
            About badTenant
          </SidebarLink>
          <SidebarLink to="/search" onClick={setReverse}>
            Search
          </SidebarLink>
          <SidebarLink to="/subscription" onClick={setReverse}>
            Subscription
          </SidebarLink>
          <SidebarLink to="/contact" onClick={setReverse}>
            Contact Us
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

