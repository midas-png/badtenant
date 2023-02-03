/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { FormContainer, LogoLink, FormContentLeft, Image } from './indexElem';

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
          <Image src="images/svg-10.svg" />
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
