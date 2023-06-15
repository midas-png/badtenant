import { animateScroll as scroll } from 'react-scroll';
import {
  Container,
  Wrapper,
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
