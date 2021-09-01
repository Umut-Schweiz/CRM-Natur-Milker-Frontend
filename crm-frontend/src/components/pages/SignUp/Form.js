import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='form-container-main'>
      <div className='form-container'>
        <div className='form-content-left'>
          <span>
          <img className='form-img' src='images/Natur Milker Logo.png' alt='spaceship' />
          </span>
        
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;
