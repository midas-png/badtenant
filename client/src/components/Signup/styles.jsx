import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 100vw;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 3.5%;
  left: 5.5%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

export const FormContentLeft = styled.div`
  background: linear-gradient(
    90deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 135, 54) 100%
  );
  position: relative;

  svg {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
