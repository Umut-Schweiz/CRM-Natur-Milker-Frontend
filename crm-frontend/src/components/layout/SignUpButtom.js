import React from 'react';
import './SignUpButtom.css';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
    <Link to='sign-up'>
      <button className="signup-btn">Sign Up <i class="fas fa-user"></i></button>
    </Link>
  );
}

export default SignUpButton