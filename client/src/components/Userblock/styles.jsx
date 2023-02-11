import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserblockWrapper = styled(Link)`
  text-decoration: none;
  background: #fff;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  min-height: 350px;
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s;
  }

  @media screen and (max-width: 600px) {
    width: fit-content;
  }
`;

export const UserblockDivideLine = styled.hr`
  background: #000;
  border: none;
  height: 2px;
  width: 90%;
  border-radius: 1px;
`;
