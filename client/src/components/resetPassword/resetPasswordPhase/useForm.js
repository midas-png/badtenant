import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    password: '',
    passwordVerify: '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
  };

  return {
    handleChange,
    values,
    handleSubmit,
    error,
    setError
  };
};

export default useForm;
