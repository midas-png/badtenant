import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #101522;
  flex-direction: column;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 150px;
  height: 150px;

  & .path {
    stroke: #ff6700;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const LogoWrapper = styled.div`
  cursor: default;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 70px;
`;

export const OrangeContent = styled.span`
  color: #ff6700;
`;
