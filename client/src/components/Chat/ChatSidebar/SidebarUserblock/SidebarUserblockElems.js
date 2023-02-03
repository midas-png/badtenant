import styled from 'styled-components';

export const UserblockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({ id, activeDialoge }) =>
    id === activeDialoge ? '#ff6700' : '#212121'};
    gap: 20px;
    height: 70px;
    width: 95%;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 0;
    padding-left: 10px;
    margin: 5px 0;

    &::-webkit-scrollbar-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border:1px solid black;
        ...
     }

    &:hover{
        background: ${({ id, activeDialoge }) =>
    id === activeDialoge ? '#ff6700' : '#363636'};
    }
`;

export const ProfileUserPicture = styled.img`
  background: #c0c0c0;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const ProfileUserName = styled.span`
  color: #fff;
`;
