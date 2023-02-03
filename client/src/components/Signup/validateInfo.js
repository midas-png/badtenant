export default function validateInfo(values, signupProgress) {
  const errors = {};

  if (!values.firstName.trim() || !values.lastName.trim()) {
    errors.username = 'Name required';
  } else if (
    !/^[a-zA-Z]+$/.test(values.firstName.replace(' ', '')) ||
    !/^[a-zA-Z]+$/.test(values.lastName.replace(' ', ''))
  ) {
    errors.username = 'Name is invalid';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email is invalid';
  }

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

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  if (signupProgress === 2) {
    if (!values.state) {
      errors.state = 'State is required';
    }

    if (!values.city) {
      errors.city = 'City is required';
    }

    if (!values.id) {
      errors.id = 'ID is required';
    } else if (!/^[A-Z0-9]\d{7,8}$/.test(values.id.trim())) {
      errors.id = 'invalid ID';
    }
  }

  if (signupProgress === 3) {
    if (!values.description) {
      errors.description = `Description length must be from 40 to 400 symbols. Now it's ${values.description.length}}`;
    }
    if (values.description?.length < 40 || values.description.length > 400) {
      errors.description = `Description length must be from 40 to 400 symbols. Now it's ${values.description.length}`;
    }
  }

  return errors;
}
