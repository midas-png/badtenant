import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/index';
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

const Chat = () => {
  const [isOpen, setOpen] = useState(false);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <Navbar setReverse={setReverse} setStatic={true} />
      <ProfileWrapper>
        <ChatComponent />
      </ProfileWrapper>
      <Footer />
    </>
  );
};

export default Chat;
