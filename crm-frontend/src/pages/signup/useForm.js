import { useState, useEffect } from 'react';
import validate from './validateInfo';
import authService from '../../services/auth';

const useForm = ({submitForm}) => {


  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
 
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  useEffect( () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        authService.register(values)
        submitForm()
        
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;