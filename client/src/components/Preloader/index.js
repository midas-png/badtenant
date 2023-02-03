import React from 'react';
import {
  StyledSpinner,
  Container,
  UnderLoader,
  OrangeContext,
} from './PreloaderElem';

function Preloader() {
  return (
    <Container>
      <UnderLoader>
        bad<OrangeContext>Tenant</OrangeContext>
      </UnderLoader>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner>
    </Container>
  );
}

export default Preloader;
