import AccountEditable from '../components/Account/AccountEditable';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import ProfileSidebar from '../components/Account/AccountSidebar/index';

const ProfileWrapper = styled.div`
  display: flex;
  background: linear-gradient(
    150deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 255, 255) 100%
  );
`;

export const Account = observer(() => {
  return (
    <ProfileWrapper>
      <ProfileSidebar />
      <AccountEditable/>
    </ProfileWrapper>
  );
});
