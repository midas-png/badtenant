/* eslint-disable no-unused-vars */
import { useState } from 'react';
import FormSignup from './formSignup';
import FormSuccess from './formSuccess';
import { Assets } from 'assets';
import { FormContainer, LogoLink, FormContentLeft } from './styles';

function Form() {
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
          <Assets.Signup />
        </FormContentLeft>
        {isValid ? (
          <FormSuccess />
        ) : (
          <FormSignup submitForm={submitForm} setIsValid={setIsValid} />
        )}
      </FormContainer>
    </>
  );
}

export default Form;
