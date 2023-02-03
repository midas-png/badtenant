import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

import {
  Container,
  H1,
  H2,
  OptionsWrapper,
  OptionsIcon,
  P,
  OptionsCard,
} from './OptionsElem';

function Options() {
  return (
    <Container id="options">
      <H1>Our Options</H1>
      <OptionsWrapper>
        <OptionsCard>
          <OptionsIcon src={Icon1} />
          <H2>Check Your Tenant</H2>
          <P>
            We help people to be thruthful and get a bit more about each other.
          </P>
        </OptionsCard>
        <OptionsCard>
          <OptionsIcon src={Icon2} />
          <H2>Check Your Landlord</H2>
          <P>We help people not to get in trouble while renting.</P>
        </OptionsCard>
        <OptionsCard>
          <OptionsIcon src={Icon3} />
          <H2>Safety first</H2>
          <P>Find the best mate for you now. It&apos;s free and safety.</P>
        </OptionsCard>
      </OptionsWrapper>
    </Container>
  );
}

export default Options;
