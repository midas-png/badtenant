/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FormContainer, LogoLink, FormContentLeft } from '../Signup/styles';
import { Assets } from 'assets';
import FormSignin from './formSignin';
import SuccessSignin from './formSuccess';

function FormLogin() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <FormContainer>
        <LogoLink to="/">badTenant</LogoLink>
        <FormContentLeft>
          <Assets.SvgAsset7 />
        </FormContentLeft>
        {isValid ? (
          <SuccessSignin />
        ) : (
          <FormSignin submitForm={submitForm} setIsValid={setIsValid} />
        )}
      </FormContainer>
    </>
  );
}

export default FormLogin;
