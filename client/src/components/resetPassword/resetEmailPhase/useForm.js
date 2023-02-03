import { useState } from 'react';

const useForm = (validate) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(email));
  };

  return {
    handleChange,
    email,
    handleSubmit,
    error,
    setError
  };
};

export default useForm;
