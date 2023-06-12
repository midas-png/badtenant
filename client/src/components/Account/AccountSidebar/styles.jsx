import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #000;
  width: 200px;
  min-height: 300px;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarItem = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  padding-top: 120px;
  top: 0;
`;
