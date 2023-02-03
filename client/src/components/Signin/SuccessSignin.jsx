import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RightContentWrapper, FormSuccessWrapper, Image } from './styles';

function SuccessSignin() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RightContentWrapper>
      <FormSuccessWrapper>
        Welcome back! Glad to see you again
      </FormSuccessWrapper>
      <Image src="images/svg-8.svg" alt="success-image" />
    </RightContentWrapper>
  );
}

export default SuccessSignin;
