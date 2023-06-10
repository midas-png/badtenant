import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  background-color: #101522;
`;

export const Wrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #ff6700;
    transition: 0.2s ease-out;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 70px auto 0 auto;
  flex-direction: column;
`;

export const SocialMediaLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: 15px;
`;

export const SocialMediaIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
