import { useContext, useState } from 'react';
import { AccountPasswordWrapper, PasswordsWrapper } from './styles';
import {
  MainInfoTitle,
  MainInfoHR,
  FormInput,
  FormLabel,
  EditableInput,
} from '../styles';
import { ButtonRequest } from '../../../ButtonElem';
import { Context } from '../../../../index';
import { updatePassword } from '../../../../http/userAPI';
import { activateToast } from '../index';

const AccountPasswordSection = () => {
  const { user } = useContext(Context);
  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPasswordInfo({
      ...passwordInfo,
      [name]: value,
    });
  };

  const changePassowrd = () => {
    if (
      !passwordInfo.oldPassword.trim() ||
      !passwordInfo.newPassword.trim() ||
      !passwordInfo.confirmPassword.trim()
    ) {
      activateToast('error', 'Field/-s is/are empty!');
      return;
    }

    const response = updatePassword(
      user.user.id,
      passwordInfo.oldPassword,
      passwordInfo.newPassword,
      passwordInfo.confirmPassword,
    );
    response
      .then(() => activateToast('success', 'Your changes saved!'))
      .catch((error) => {
        activateToast('error', error.response.data.messaage);
      });
  };

  return (
    <AccountPasswordWrapper id="safety">
      <MainInfoTitle>Safety</MainInfoTitle>
      <MainInfoHR />
      <PasswordsWrapper>
        <FormInput>
          <FormLabel htmlFor="oldPassword">Enter your password</FormLabel>
          <EditableInput
            id="oldPassword"
            name="oldPassword"
            value={passwordInfo.oldPassword}
            onChange={handleChange}
            password={true}
          />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="newPassword">Enter new password</FormLabel>
          <EditableInput
            id="newPassword"
            name="newPassword"
            value={passwordInfo.newPassword}
            onChange={handleChange}
            password={true}
          />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="confirmPassword">Confirm new password</FormLabel>
          <EditableInput
            id="confirmPassword"
            name="confirmPassword"
            value={passwordInfo.confirmPassword}
            onChange={handleChange}
            password={true}
          />
        </FormInput>
      </PasswordsWrapper>
      <ButtonRequest
        primary={true}
        style={{ marginTop: '10px' }}
        onClick={() => changePassowrd()}>
        Save Changes
      </ButtonRequest>
    </AccountPasswordWrapper>
  );
};

export default AccountPasswordSection;
