import React from 'react';
import {
  Container,
  Title,
  UnderTitle,
  LinkToMain,
  SvgIconWrapper,
  TextWrapper,
  HeaderWrapper,
  Header,
  OrangeBox,
  FooterWrapper,
  Footer,
} from './styles';
import { Assets } from 'assets';

function NotFound() {
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
      <SvgIconWrapper>
        <Assets.SvgAsset7 />
      </SvgIconWrapper>
      <FooterWrapper>
        <Footer>
          badTenant &copy; {new Date().getFullYear()} All rights reserved.
        </Footer>
      </FooterWrapper>
    </Container>
  );
}

export default NotFound;
