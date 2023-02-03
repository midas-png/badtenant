import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #101522;
`;

export const Title = styled.h1`
  color: #fff;
  cursor: default;
  text-align: center;
  margin-bottom: 15px;
  -webkit-user-select: none;
  -mox-user-select: none;
  -o-user-select: none;
  --user-select: none;
`;

export const UnderTitle = styled.p`
  color: #fff;
  cursor: default;
`;

export const LinkToMain = styled(Link)`
  text-decoration: none;
  color: #ff6700;
`;

export const Image = styled.img`
  height: 500px;
  width: 500px;
  -webkit-user-select: none;
  -mox-user-select: none;
  -o-user-select: none;
  --user-select: none;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  -webkit-user-select: none;
  -mox-user-select: none;
  -o-user-select: none;
  --user-select: none;
`;

export const Header = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const HeaderWrapper = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  -webkit-user-select: none;
  -mox-user-select: none;
  -o-user-select: none;
  --user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    position: fixed;
    margin-bottom: 75vh;
  }
`;

export const OrangeBox = styled.span`
  color: #ff6700;
`;

export const FooterWrapper = styled.div`
  -webkit-user-select: none;
  -mox-user-select: none;
  -o-user-select: none;
  --user-select: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    margin-top: 80vh;
  }
`;

export const Footer = styled.footer`
  color: #fff;
`;
