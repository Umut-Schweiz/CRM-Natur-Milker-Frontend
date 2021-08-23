import React from 'react';
import './SignUpButtom.css';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}

export default SignUpButton