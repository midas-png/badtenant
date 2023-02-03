import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/index';
import AccountEditable from '../components/Account/AccountEditable';
import AccountInfo from '../components/Account/AccountInfo';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Context } from '../index';
import styled from 'styled-components';
import ProfileSidebar from '../components/Account/AccountSidebar/index';

const ProfileWrapper = styled.div`
  display: flex;
  background: linear-gradient(
    150deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 255, 255) 100%
  );
  min-height: 1000px;
`;

const Account = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const { id } = useParams();
  const { user } = useContext(Context);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Navbar setReverse={setReverse} setStatic={true} />
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <ProfileWrapper>
        <ProfileSidebar />
        {user.user.id == id ? <AccountEditable id={id} /> : <AccountInfo />}
      </ProfileWrapper>
      <Footer />
    </>
  );
});

export default Account;
