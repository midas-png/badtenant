import { useContext } from 'react';
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

export const Account = observer(() => {
  const { id } = useParams();
  const { user } = useContext(Context);

  return (
    <ProfileWrapper>
      <ProfileSidebar />
      {user.user.id == id ? <AccountEditable id={id} /> : <AccountInfo />}
    </ProfileWrapper>
  );
});
