/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  FormContainer,
  LogoLink,
  FormContentLeft,
  Image,
} from '../Signup/indexElem';
import FormSignin from './FormSignin';
import SuccessSignin from './SuccessSignin';

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
          <Image src="images/svg-9.svg" />
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
