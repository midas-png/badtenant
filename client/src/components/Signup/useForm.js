import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [image, setImage] = useState('');
  const [profilePicture, setProfilePicture] = useState();
  const [role, setRole] = useState('TENANT');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    state: '',
    city: '',
    description: '',
  });

  const [signupProgress, setSignupProgress] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRoleChange = (role) => {
    setRole(role);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file !== undefined) {
      setProfilePicture(e.target.files[0]);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, signupProgress, profilePicture));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleRoleChange,
    handleImageChange,
    signupProgress,
    setSignupProgress,
    image,
    profilePicture,
    role,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;
