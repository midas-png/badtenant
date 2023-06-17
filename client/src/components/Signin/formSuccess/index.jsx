import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RightContentWrapper, FormSuccessWrapper } from './styles';
import { Assets } from 'assets';

function SuccessSignin() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RightContentWrapper>
      <FormSuccessWrapper>
        Glad to see you again!
      </FormSuccessWrapper>
      <Assets.Welcome />
    </RightContentWrapper>
  );
}

export default SuccessSignin;
