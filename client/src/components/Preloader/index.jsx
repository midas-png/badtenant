import {
  PreloaderWrapper,
  StyledSpinner,
  LogoWrapper,
  OrangeContent,
} from './styles';

export const Preloader = () => {
  return (
    <PreloaderWrapper>
      <LogoWrapper>
        bad<OrangeContent>Tenant</OrangeContent>
      </LogoWrapper>
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
    </PreloaderWrapper>
  );
};
