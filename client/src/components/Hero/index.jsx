import { useState } from 'react';
import { Assets } from 'assets';
import {
  Container,
  HeroBackground,
  VideoBg,
  Content,
  H1,
  P,
  ButtonWrapper,
  ArrowAhead,
  ArrowRight,
} from './styles';
import { Button } from '../ButtonElem';

function Hero() {
  const [isHover, setHover] = useState(false);

  const onHover = () => {
    setHover(!isHover);
  };

  return (
    <Container id="home">
      <HeroBackground>
        <VideoBg autoPlay loop muted src={Assets.HeroVideo} type="video/mp4" />
      </HeroBackground>
      <Content>
        <H1>Get More from Rating</H1>
        <P>
          Sign up for a new account in one click and search for your tenant.
        </P>
        <ButtonWrapper>
          <Button
            to="/search"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true">
            Get started {isHover ? <ArrowAhead /> : <ArrowRight />}
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

export default Hero;
