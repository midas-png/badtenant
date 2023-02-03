export default function validateInfo(values) {
  const errors = {};

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = 'Password must be 8-16 characters';
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = 'Password must include at least 1 CAPITAL character';
  } else if (!/[a-z]/g.test(values.password)) {
    errors.password = 'Password must include at least 1 small letter';
  } else if (!/[!@#$%^&*_.0-9]/g.test(values.password)) {
    errors.password =
      'Password must include at least 1 number or special letter';
  } else if (values.password === values.email) {
    errors.password = 'Password must not be you email';
  }

  if (!values.passwordVerify) {
    errors.passwordVerify = 'Password verify is required';
  } else if (values.passwordVerify !== values.password) {
    errors.passwordVerify = 'Passwords do not match';
  }

  return errors;
}
