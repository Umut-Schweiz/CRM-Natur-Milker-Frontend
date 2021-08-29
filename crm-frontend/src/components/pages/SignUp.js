import React from 'react';
import "./SignUp.css"
import '../../App.css';

const SignUp = () => {

  return (

    <div id="main-login">
      <section id="login-left">
        <img id="login-body-image" src="../images/Natur Milker Logo.png" alt="firm-logo"></img>
        <h1 id="login-body-titel">Welcome to Natur Welt</h1>
        <p id="login-body-paragraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <p id="login-footer-paragraf">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </section>
      <section id="login-right">
        <h1>Login</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <form className="w3-container" action="/action_page.php">
          <p>
            <label className="w3-text-brown"><b>User Name</b></label>
            <input className="w3-input w3-border w3-sand" name="first" type="text" /></p>
          <p>
            <label className="w3-text-brown"><b> Name</b></label>
            <input className="w3-input w3-border w3-sand" name="last" type="text" /></p>
          <p>
          <button className="w3-btn w3-brown">Register</button></p>
        </form>

      </section>
    </div>

  )
}

export default SignUp
