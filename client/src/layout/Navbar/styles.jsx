import styled, { css } from 'styled-components/macro';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scollNav, setStatic }) =>
    scollNav || setStatic ? '#000' : 'transparent'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;

  @media screen and (man-width: 768px) {
    transition: 0.8s all ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const BurgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkRouter)`
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    border-bottom: 3px solid #ff6700;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavButton = styled.nav`
  min-width: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ff6700' : 'transparent')};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({ primary }) => (primary ? '#010606' : '#ff6700')};
  font-size: 16px;
  border: ${({ primary }) =>
    primary ? '2px solid #ff6700' : '2px solid #ff6700'};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ff934a' : '#fff')};
    color: #010606;
    border: ${({ primary }) =>
    primary ? '2px solid #ff934a' : '2px solid #fff'};
  }
`;

export const TenantContext = styled.span`
  color: #ff6700;
`;

export const AccountWrapper = styled.div`
  min-width: 5vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AccountImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  top: 0;
  background: #101522;
  min-height: 80px;
  padding: 15px;
  margin-top: 80px;
  margin-right: 110px;
  border-radius: 0 0 10px 10px;
`;

export const ItemsStyle = css`
  margin: 10px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ff6700;
    transition: color 0.2s ease-in-out;
  }
`;

export const DropdownItem = styled(LinkRouter)`
  ${ItemsStyle}
`;

export const DropdownLogOut = styled.span`
  ${ItemsStyle}
`;

export const DropdownHR = styled.hr`
  border: 1px solid #ff6700;
  border-radius: 3px;
  width: 100%;
  margin: px;
`;
