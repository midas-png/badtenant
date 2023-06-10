/* eslint-disable no-unused-vars */
import { useState, useLayoutEffect, useEffect } from 'react';
import {
  ContentRight,
  Form,
  Title,
  FormInputs,
  FormLabel,
  FormInput,
  ButtonWrapper,
  FormInputLogin,
  ErrorText,
  MainLink,
  FormInputButtonsWrapper,
  FormContainer,
  LogoLink,
  FormContentLeft,
  Image,
  SubmittedWrapper,
  SubmittedContent,
  SubmittedImage,
} from './styles';
import { Button } from 'ui';
import { useParams, useNavigate } from 'react-router-dom';
import { resetTokenVerify, resetUserPassword } from 'http/userAPI';
import useForm from './useForm';
import validate from './validate';
import { ToastContainer, toast } from 'react-toastify';
import { Assets } from 'assets';

const ResetPasswordPhase = () => {
  const { handleChange, values, handleSubmit, error } = useForm(validate);
  const [loading, setLoading] = useState(false);
  const { userId, resetToken } = useParams();
  const navigate = useNavigate();
  const [linkError, setLinkError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = async () => {
    if (Object.keys(validate(values)).length === 0) {
      setLoading(true);
      try {
        await resetUserPassword(userId, values.password)
          .then((data) => {
            setSubmitted(true);
          })
          .catch((error) => {
            setLinkError(error.response?.data.messaage);
          })
          .finally(() => setLoading(false));
      } catch (error) {
        toast.error('Unknown error. Try again later.');
      }
    }
  };

  useLayoutEffect(() => {
    resetTokenVerify(userId, resetToken, true)
      .then(() => {
        setLinkError('');
      })
      .catch((error) => setLinkError(error.response?.data.messaage));
  }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <ToastContainer />
      {linkError == '' ? (
        <FormContainer>
          <LogoLink to="/">badTenant</LogoLink>
          <FormContentLeft>
            <Assets.SvgAsset5 />
          </FormContentLeft>
          {!submitted ? (
            <ContentRight>
              <Form onSubmit={handleSubmit}>
                <Title>
                  Get started with us today! Create your account by filling out
                  the form below.
                </Title>
                <FormInputs>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormInput
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {error.password && <ErrorText>{error.password}</ErrorText>}
                </FormInputs>
                <FormInputs>
                  <FormLabel htmlFor="passwordVerify">
                    Verify password
                  </FormLabel>
                  <FormInput
                    id="passwordVerify"
                    type="password"
                    name="passwordVerify"
                    placeholder="Verify your password"
                    value={values.passwordVerify}
                    onChange={handleChange}
                  />
                  {error.passwordVerify && (
                    <ErrorText>{error.passwordVerify}</ErrorText>
                  )}
                </FormInputs>
                <FormInputButtonsWrapper>
                  <ButtonWrapper type="submit" onClick={handleReset}>
                    <Button
                      font="medium"
                      typeDisabled="secondary"
                      disabled={loading}>
                      Reset Password
                    </Button>
                  </ButtonWrapper>
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
              <Assets.SvgAsset7 />
            </SubmittedWrapper>
          )}
        </FormContainer>
      ) : (
        <span>{linkError}</span>
      )}
    </>
  );
};

export default ResetPasswordPhase;
