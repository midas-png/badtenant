import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  UnderTitle,
  LinkToMain,
  Image,
  TextWrapper,
  HeaderWrapper,
  Header,
  OrangeBox,
  FooterWrapper,
  Footer,
} from './NotFoundElem';

function NotFound({ img, alt }) {
  return (
    <Container>
      <HeaderWrapper>
        <Header to="/">
          bad<OrangeBox>Tenant</OrangeBox>
        </Header>
      </HeaderWrapper>
      <TextWrapper>
        <Title>Oops..! There is no such page. 404 Error</Title>
        <UnderTitle>
          <LinkToMain to="/">Click here</LinkToMain> to move to the main page
        </UnderTitle>
      </TextWrapper>
      <Image src={img} alt={alt} />
      <FooterWrapper>
        <Footer>
          badTenant &copy; {new Date().getFullYear()} All rights reserved.
        </Footer>
      </FooterWrapper>
    </Container>
  );
}

export default NotFound;

NotFound.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};
