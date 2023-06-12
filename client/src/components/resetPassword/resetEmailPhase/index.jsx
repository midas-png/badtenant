/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {
  ContentRight,
  Form,
  Title,
  FormInputs,
  FormLabel,
  FormInput,
  FormInputBtnWrapper,
  FormInputLogin,
  ErrorText,
  MainLink,
  FormInputButtonsWrapper,
  FormContainer,
  LogoLink,
  FormContentLeft,
  SubmittedWrapper,
  SubmittedContent,
  SubmittedSvgWrapper,
} from './styles';
import { sendResetLink } from 'http/userAPI';
import { Button } from 'ui';
import useForm from './useForm';
import validate from './validate';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Assets } from 'assets';

const FormEmailPhase = () => {
  const { handleChange, email, handleSubmit, error, setError } =
    useForm(validate);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailSend = async () => {
    if (!validate(email)) {
      setLoading(true);
      await sendResetLink(email)
        .then((data) => {
          setSubmitted(true);
        })
        .catch((error) => setError(error.response?.data.messaage))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate(-1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <ToastContainer />
      <FormContainer>
        <LogoLink to="/">badTenant</LogoLink>
        <FormContentLeft>
          <Assets.ForgotPassword />
        </FormContentLeft>
        {!submitted ? (
          <ContentRight>
            <Form onSubmit={handleSubmit}>
              <Title>
                Get started with us today! Create your account by filling out
                the form below.
              </Title>
              <FormInputs>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                />
                {error && <ErrorText>{error}</ErrorText>}
              </FormInputs>
              <FormInputButtonsWrapper>
                <FormInputBtnWrapper type="submit" onClick={emailSend}>
                  <Button
                    font="medium"
                    typeDisabled="secondary"
                    disabled={loading}>
                    Send Link
                  </Button>
                </FormInputBtnWrapper>
              </FormInputButtonsWrapper>
              <FormInputLogin>
                Already have an account? Login by{' '}
                <MainLink to="/signin">the link</MainLink>
              </FormInputLogin>
            </Form>
          </ContentRight>
        ) : (
          <SubmittedWrapper>
            <SubmittedContent>
              Reset link has been sent to your email!
            </SubmittedContent>
            <Assets.SvgAsset5 />
          </SubmittedWrapper>
        )}
      </FormContainer>
    </>
  );
};

export default FormEmailPhase;
