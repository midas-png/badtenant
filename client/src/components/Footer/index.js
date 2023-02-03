import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  Container,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMediaIconLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialMediaLogo,
  WebsiteRights,
  SocialMediaIcon,
  FooterA,
} from './FooterElem';

function Footer() {
  const bringToHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <Wrapper>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
              <FooterLink to="/about">How it works</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="/signin">YouTube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterA
                href="https://vm.tiktok.com/ZSeaoh3Qo/"
                target="_blank"
                rel="noreferrer">
                TikTok
              </FooterA>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">+1 999 999 99</FooterLink>
              <FooterLink to="/signin">example@badtenant.com</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Legal</LinkTitle>
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/privacy">Privacy</FooterLink>
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
              <SocialMediaIcon>
                <SocialMediaIconLink
                  href="/"
                  target="_blank"
                  aria-label="YouTube">
                  <FaYoutube />
                </SocialMediaIconLink>
                <SocialMediaIconLink
                  href="/"
                  target="_blank"
                  aria-label="Twitter">
                  <FaTwitter />
                </SocialMediaIconLink>
                <SocialMediaIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook">
                  <FaFacebook />
                </SocialMediaIconLink>
                <SocialMediaIconLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram">
                  <FaInstagram />
                </SocialMediaIconLink>
                <SocialMediaIconLink
                  href="https://vm.tiktok.com/ZSeaoh3Qo/"
                  target="_blank"
                  aria-label="Tiktok">
                  <FaTiktok />
                </SocialMediaIconLink>
              </SocialMediaIcon>
            </WebsiteRights>
          </SocialMediaWrapper>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
}

export default Footer;
