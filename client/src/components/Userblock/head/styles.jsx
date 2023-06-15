import styled from 'styled-components';

export const UserblockName = styled.span`
  text-decoration: none;
  font-weight: bold;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 40px;
  height: 1.2em;
  font-size: 20px;
  white-space: nowrap;
`;

export const UserblockImageWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserblockImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
`;

export const UserblockNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
