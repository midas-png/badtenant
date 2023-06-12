import { useState } from 'react';
import {
  AddPictureIcon,
  ContentRight,
  Form,
  Title,
  FormInputs,
  FormLabel,
  FormInput,
  FormTextarea,
  RadioButtonsWrapper,
  FormInputBtnWrapper,
  FormInputLogin,
  ErrorText,
  MainLink,
  FormTerms,
  Terms,
  ImageInput,
  ImageUploadLabel,
  ImageUploadWrapper,
  FormInputButtonsWrapper,
  LoaderIcon,
} from './styles';
import useForm from '../useForm';
import validate from '../validateInfo';
import PropTypes from 'prop-types';
import { signup } from '../../../http/userAPI';
import { RadioButton, Button } from 'ui';

const FormSignup = ({ submitForm, setIsValid }) => {
  const [errorServerResponse, setErrorServerResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    handleChange,
    handleRoleChange,
    handleImageChange,
    signupProgress,
    setSignupProgress,
    image,
    role,
    values,
    handleSubmit,
    errors,
  } = useForm(submitForm, validate);

  const handleNext = (value) => {
    if (Object.keys(validate(values, signupProgress)).length === 0) {
      setSignupProgress(value);
    }
  };

  const signUpHandler = async () => {
    if (Object.keys(validate(values, signupProgress)).length === 0) {
      setLoading(true);
      await signup(
        values.firstName,
        values.lastName,
        values.email,
        values.password,
        values.state + ' ' + values.city,
        values.description,
        image,
        role,
      )
        .then(() => {
          setIsValid(true);
        })
        .catch((error) => {
          setErrorServerResponse(error.response?.data.messaage);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <ContentRight>
      <Form onSubmit={handleSubmit}>
        <Title>
          Get started with us today! Create your account by filling out the form
          below.
        </Title>
        {signupProgress == 1 ? (
          <>
            <FormInputs>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormInput
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.username && <ErrorText>{errors.username}</ErrorText>}
            </FormInputs>
            <FormInputs>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormInput
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.username && <ErrorText>{errors.username}</ErrorText>}
            </FormInputs>
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

              {errors.email && <ErrorText>{errors.email}</ErrorText>}
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

              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </FormInputs>
            <FormInputs>
              <FormLabel htmlFor="password2">Confirm Password</FormLabel>
              <FormInput
                id="password2"
                type="password"
                name="password2"
                placeholder="Enter your password again"
                value={values.password2}
                onChange={handleChange}
              />

              {errors.password2 && <ErrorText>{errors.password2}</ErrorText>}
            </FormInputs>
            <FormInputBtnWrapper type="submit" onClick={() => handleNext(2)}>
              <Button font="medium" typeDisabled="secondary">
                Next
              </Button>
            </FormInputBtnWrapper>
          </>
        ) : signupProgress == 2 ? (
          <>
            <ImageUploadWrapper>
              <ImageInput
                id="img"
                name="img"
                accept="image/jpeg, image/jpg"
                onChange={handleImageChange}
              />
              <ImageUploadLabel htmlFor="img" userImage={image}>
                {!image && (
                  <>
                    <AddPictureIcon />
                    <span>Add a Picture</span>
                  </>
                )}
              </ImageUploadLabel>
            </ImageUploadWrapper>
            <FormInputs>
              <FormLabel htmlFor="state">Enter your country</FormLabel>
              <FormInput
                id="state"
                type="text"
                name="state"
                placeholder="Enter your country"
                value={values.state}
                onChange={handleChange}
              />

              {errors.state && <ErrorText>{errors.state}</ErrorText>}
            </FormInputs>
            <FormInputs>
              <FormLabel htmlFor="city">Enter your city</FormLabel>
              <FormInput
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={values.city}
                onChange={handleChange}
              />

              {errors.city && <ErrorText>{errors.city}</ErrorText>}
            </FormInputs>
            <FormInputButtonsWrapper>
              <FormInputBtnWrapper onClick={() => setSignupProgress(1)}>
                <Button font="medium" typeDisabled="secondary">
                  Back
                </Button>
              </FormInputBtnWrapper>
              <FormInputBtnWrapper type="submit" onClick={() => handleNext(3)}>
                <Button font="medium" typeDisabled="secondary">
                  Next
                </Button>
              </FormInputBtnWrapper>
            </FormInputButtonsWrapper>
          </>
        ) : (
          <>
            <FormInputs>
              <FormLabel htmlFor="role">What&apos;s your role?</FormLabel>
              <RadioButtonsWrapper>
                <RadioButton
                  id="tenantRadio"
                  label="I'm a tenant and searching for a property to rent"
                  name="TENANT"
                  value={role === 'TENANT'}
                  onChange={() => handleRoleChange('TENANT')}
                />
                <RadioButton
                  id="landlordRadio"
                  label="I'm a landlord and searching for a tenant to give my property for rent"
                  name="LANDLORD"
                  value={role === 'LANDLORD'}
                  onChange={() => handleRoleChange('LANDLORD')}
                />
              </RadioButtonsWrapper>
            </FormInputs>
            <FormInputs>
              <FormLabel htmlFor="description">
                Tell us about yourself
              </FormLabel>
              <FormTextarea
                id="description"
                type="text"
                name="description"
                placeholder="Tell us about yourself"
                value={values.description}
                onChange={handleChange}
              />
              {errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </FormInputs>
            <FormInputButtonsWrapper>
              <FormInputBtnWrapper onClick={() => setSignupProgress(2)}>
                <Button font="medium" typeDisabled="secondary">
                  Back
                </Button>
              </FormInputBtnWrapper>
              <FormInputBtnWrapper
                type="submit"
                onClick={() => signUpHandler()}>
                <Button
                  font="medium"
                  typeDisabled="secondary"
                  disabled={loading}>
                  {loading ? <LoaderIcon /> : 'Sign Up'}
                </Button>
              </FormInputBtnWrapper>
            </FormInputButtonsWrapper>
          </>
        )}
        <FormInputLogin>
          Already have an account? Login by{' '}
          <MainLink to="/signin">the link</MainLink>
        </FormInputLogin>
        <FormTerms>
          By signing up you will accept{' '}
          <Terms to="/terms">the terms and conditions.</Terms>
        </FormTerms>
        {errorServerResponse && <ErrorText>{errorServerResponse}</ErrorText>}
      </Form>
    </ContentRight>
  );
};

export default FormSignup;

FormSignup.propTypes = {
  submitForm: PropTypes.func,
  setIsValid: PropTypes.func,
};
