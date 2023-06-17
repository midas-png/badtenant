import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContentRight, FormSuccessElement } from './styles';
import { Assets } from 'assets';

function FormSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FormContentRight>
      <FormSuccessElement>Nice to meet you!</FormSuccessElement>
      <Assets.SvgAsset3 />
    </FormContentRight>
  );
}

export default FormSuccess;
