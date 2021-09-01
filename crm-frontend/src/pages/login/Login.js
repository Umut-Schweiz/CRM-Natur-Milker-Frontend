import React from 'react';
import "./Login.css"
import '../../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';

const Login = () => {

  return (

    <>
      <Navbar />
      <div id="main-login">
        <section id="login-left">
          <img id="login-body-image" src="../images/Natur Milker Logo.png" alt="firm-logo"></img>
          <div id="login-left-body">
            <h1 id="login-body-titel">Welcome to Natural World...</h1>
            <p id="login-body-paragraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>

          <p id="login-footer-paragraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </section>
        <section id="login-right">
          <div id="main-login-right">
            <h1>Login</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <form className="container-login" >
              <p>
                <label className="w3-text-brown"><strong>User Name</strong></label><br />
                <input className="w3-input w3-border w3-sand" name="first" type="text" /></p>
              <p>
                <label className="w3-text-brown"><strong>Password</strong></label><br />
                <input className="w3-input w3-border w3-sand" name="last" type="text" /></p>
              <p>
                <button className="w3-btn w3-brown">Login</button></p>

              <div id="login-redirected">
                <p >New User? <Link
                  to='/sign-up'
                >
                  SignUp
                </Link></p>
              </div>

            </form>
          </div>

        </section>
      </div>
      <Footer />
    </>

  )
}

export default Login
