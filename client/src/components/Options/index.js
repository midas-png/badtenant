import React from 'react';
import { Assets } from 'assets';
import {
  Container,
  H1,
  H2,
  OptionsWrapper,
  P,
  OptionsCard,
} from './OptionsElem';

function Options() {
  return (
    <Container id="options">
      <H1>Our Options</H1>
      <OptionsWrapper>
        <OptionsCard>
          <Assets.SvgAsset1 />
          <H2>Check Your Tenant</H2>
          <P>
            We help people to be thruthful and get a bit more about each other.
          </P>
        </OptionsCard>
        <OptionsCard>
          <Assets.SvgAsset2 />
          <H2>Check Your Landlord</H2>
          <P>We help people not to get in trouble while renting.</P>
        </OptionsCard>
        <OptionsCard>
          <Assets.SvgAsset3 />
          <H2>Safety first</H2>
          <P>Find the best mate for you now. It&apos;s free and safety.</P>
        </OptionsCard>
      </OptionsWrapper>
    </Container>
  );
}

export default Options;
