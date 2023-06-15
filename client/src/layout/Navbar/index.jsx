import { useState, useEffect, useContext } from 'react';
import {
  Nav,
  Container,
  NavLogo,
  BurgerIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
  NavButtonLink,
  TenantContext,
  AccountWrapper,
  AccountImage,
  DropdownWrapper,
  DropdownItem,
  DropdownLogOut,
  DropdownHR,
} from './styles';
import {
  ModalWrapper,
  ModalTitle,
  ModalParagraph,
  ButtonsWrapper,
  ModalButton,
} from '../../components/ModalNavbarElem';
import { animateScroll as scroll } from 'react-scroll';
import { observer } from 'mobx-react-lite';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { Context } from '../../index';
import { Modal } from 'ui';
import { Assets } from 'assets';
import { getUserImage } from 'http/userAPI';
import Cookies from 'js-cookie';

export const Navbar = observer(({ setReverse, setStatic }) => {
  const [scollNav, setScrollNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [userImage, setUserImage] = useState(Assets.UserNoImage);
  const { user } = useContext(Context);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const changeNavScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const bringToHome = () => {
    scroll.scrollToTop();
  };

  const logOut = () => {
    Cookies.remove('token');
    user.setUser({});
    user.setIsAuth(false);
    setModalActive(false);
    setUserImage(Assets.UserNoImage);
  };

  useEffect(() => {
    if (user.user.id) {
      getUserImage(user.user.id).then((image) => {
        console.log(image);
        if (!image) {
          setUserImage(Assets.UserNoImage);
        } else {
          const imageURL = `http://217.151.229.239:5000/${image}`;
          setUserImage(imageURL);
        }
      });
    }
  }, [user.user]);

  useEffect(() => {
    window.addEventListener('scroll', changeNavScroll);
    return () => {
      window.removeEventListener('scroll', changeNavScroll);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scollNav={scollNav} setStatic={setStatic}>
          <Container>
            <NavLogo to="/" onClick={bringToHome}>
              bad<TenantContext>Tenant</TenantContext>
            </NavLogo>
            <BurgerIcon onClick={setReverse}>
              <FaBars />
            </BurgerIcon>
            <NavMenu>
              <NavItem>
                <NavLink to="/search">Catalog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contacts">Contact Us</NavLink>
              </NavItem>
            </NavMenu>
            {!user.isAuth ? (
              <NavButton>
                <NavButtonLink to="/signup" primary={true}>
                  Sign Up
                </NavButtonLink>
                <NavButtonLink to="/signin" primary={false}>
                  Sign In
                </NavButtonLink>
              </NavButton>
            ) : (
              <AccountWrapper>
                <AccountImage
                  src={userImage}
                  onClick={() => toggleDropdown()}
                />
                {dropdown && (
                  <DropdownWrapper>
                    <DropdownItem to="/account">My Account</DropdownItem>
                    <DropdownItem to={`/advertisement/${user.user.id}`}>
                      My Advertisement
                    </DropdownItem>
                    <DropdownHR />
                    <DropdownLogOut onClick={() => setModalActive(true)}>
                      Log Out
                    </DropdownLogOut>
                  </DropdownWrapper>
                )}
              </AccountWrapper>
            )}
          </Container>
        </Nav>
        {modalActive ? (
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalWrapper>
              <ModalTitle>Log Out</ModalTitle>
              <ModalParagraph>
                Are you sure you want to log out? Your authenticatinal token
                will be deleted and you have to login again.
              </ModalParagraph>
              <ButtonsWrapper>
                <ModalButton onClick={() => logOut()}>Log Out</ModalButton>
                <ModalButton
                  primary={true}
                  onClick={() => setModalActive(false)}>
                  Cancel
                </ModalButton>
              </ButtonsWrapper>
            </ModalWrapper>
          </Modal>
        ) : null}
      </IconContext.Provider>
    </>
  );
});
