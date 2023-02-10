/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Assets } from 'assets';
import { FormContainer, LogoLink, FormContentLeft } from './indexElem';

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
          <Assets.SvgAsset6 />
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
