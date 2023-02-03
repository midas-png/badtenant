import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContentRight, FormSuccessElement, Image } from './FormSuccessElem';

function FormSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FormContentRight>
      <FormSuccessElement>
        Nice to meet you! Please, check your email address to confirm your
        account.
      </FormSuccessElement>
      <Image src="images/svg-8.svg" alt="success-image" />
    </FormContentRight>
  );
}

export default FormSuccess;
