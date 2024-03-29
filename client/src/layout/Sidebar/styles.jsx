import styled, { css } from 'styled-components/macro';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 160px 0 100px;
  height: 100%;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, fit-content(100%));
    gap: 50px 0;
    text-align: center;
    width: fit-content;

    @media screen and (
        grid-template-rows: repeat(6, 60px);

    )
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff6700;
    transition: 0.2s ease-in-out;
  }
`;

export const SideButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const buttonStyles = css`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ff6700' : 'transparent')};
  white-space: nowrap;
  padding: 16px 90px;
  color: #010606;
  color: ${({ primary }) => (primary ? '#010606' : '#ff6700')};
  font-size: 1.5rem;
  outline: none;
  border: 2px solid #ff6700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    border: ${({ primary }) =>
    primary ? '2px solid #fff' : '2px solid #ff954d'};
    transition: all 0.2s;
    background: ${({ primary }) => (primary ? '#fff' : '#ff954d')};
    color: #010606;
  }
`;

export const SidebarRoute = styled(LinkRouter)`
  ${buttonStyles}
`;

export const SidebarButton = styled.button`
  ${buttonStyles}
`;
