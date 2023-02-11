import styled from 'styled-components';
import ChatComponent from '../components/Chat/index';

const ProfileWrapper = styled.div`
  display: flex;
  background: linear-gradient(
    150deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 255, 255) 100%
  );
  min-height: 700px;
`;

export const Chat = () => {
  return (
    <ProfileWrapper>
      <ChatComponent />
    </ProfileWrapper>
  );
};
