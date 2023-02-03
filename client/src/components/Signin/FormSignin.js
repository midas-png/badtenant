import React, { useContext, useState } from 'react';
import {
  ContentRight,
  Form,
  Title,
  FormInputs,
  FormLabel,
  FormInput,
  FormInputBtnWrapper,
  ErrorText,
  MainLink,
  FormInputLogin,
  LoaderIcon,
} from '../Signup/FormSignupElem';
import { Button } from 'ui';
import PropTypes from 'prop-types';
import useForm from './useForm';
import validate from './validateInfo';
import { signin } from '../.././http/userAPI';
import { Context } from '../../index';

function FormSignin({ submitForm, setIsValid }) {
  const [errorServerResponse, setErrorServerResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
  );
  const { user } = useContext(Context);

  const signInHandler = async () => {
    setLoading(true);
    await signin(values.email, values.password)
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        setIsValid(true);
      })
      .catch((error) => {
        setErrorServerResponse(error.response?.data.messaage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ContentRight>
      <Form onSubmit={handleSubmit}>
        <Title>
          Get started with us today! Create your account by filling out the form
          below.
        </Title>
        <FormInputs>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </FormInputs>
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
        </FormInputs>
        {errors.valid && <ErrorText>{errors.valid}</ErrorText>}
        {errorServerResponse && <ErrorText>{errorServerResponse}</ErrorText>}
        <FormInputBtnWrapper type="submit" onClick={() => signInHandler()}>
          <Button font='medium' typeDisabled='secondary' disabled={loading}>
            {loading ? <LoaderIcon /> : 'Sign In'}
          </Button>
        </FormInputBtnWrapper>
        <FormInputLogin>
          First time? Join us by signing up by{' '}
          <MainLink to="/signup">the link!</MainLink>
        </FormInputLogin>
        <FormInputLogin>
          <MainLink to="/reset_password_email">Forgot password?</MainLink>
        </FormInputLogin>
      </Form>
    </ContentRight>
  );
}

export default FormSignin;

FormSignin.propTypes = {
  submitForm: PropTypes.func,
  setIsValid: PropTypes.func,
};
