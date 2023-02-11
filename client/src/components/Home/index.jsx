import React from 'react';
import {
  Container,
  HomeBg,
  Image,
  Content,
  H1,
  P,
  Button,
  SearchWrapper,
  SearchBar,
} from './styles';

function Home() {
  return (
    <Container>
      <HomeBg>
        <Image src={Image} />
      </HomeBg>
      <Content>
        <H1>Check for Your Tenant now</H1>
        <P>There are over 100.000 Tenant Already on badTenant.</P>
        <SearchWrapper>
          <SearchBar to="/search" />
          <Button>Search</Button>
        </SearchWrapper>
      </Content>
    </Container>
  );
}

export default Home;
