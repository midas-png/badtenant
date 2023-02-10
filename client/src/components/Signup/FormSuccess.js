import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContentRight, FormSuccessElement } from './FormSuccessElem';
import { Assets } from 'assets';

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
      <Assets.SvgAsset3 />
    </FormContentRight>
  );
}

export default FormSuccess;
