import React from 'react';
import './LoginButton.css';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to='login'>
      <button className="login-btn">Login <i class="fas fa-user"></i></button>
    </Link>
  );
}

export default LoginButton