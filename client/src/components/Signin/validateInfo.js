export default function validateInfo(values) {
  const errors = {};

  if (!values.email) {
    errors.valid = 'Email or/-and password required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.valid = 'Email or password is invalid';
  }

  if (!values.password) {
    errors.password = 'Email or/-and password required';
  }

  return errors;
}
