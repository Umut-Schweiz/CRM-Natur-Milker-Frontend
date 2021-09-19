import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSuccess';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (

    <>
      <Navbar />
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
      <Footer />
    </>


  );
};

export default Form;
