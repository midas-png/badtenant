import { animateScroll as scroll } from 'react-scroll';
import {
  Container,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialMediaLogo,
  WebsiteRights,
} from './styles';

export const Footer = () => {

  const bringToHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <Wrapper>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About</LinkTitle>
              <FooterLink to="/about">How it works</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Email</FooterLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaLogo to="/" onClick={bringToHome}>
              badTenant
            </SocialMediaLogo>
            <WebsiteRights>
              badTenant &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </SocialMediaWrapper>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
};
