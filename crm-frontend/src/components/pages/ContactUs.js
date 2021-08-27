import React from 'react';
import "./ContactUs.css";
import { useState } from 'react';

const ContactUs = () => {

  const [message, setMessage] = useState({ })

  const handleSubmit = (event) => {
    console.log(message)
    alert(message);
    event.preventDefault();
  }

  return (

    <div className="contact-us">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-us-titel">CONTACT US</h2>
        <p className="contact-paragraf" type="Name:"><input className="contact-input" placeholder="Write your name here.." onChange={(e) => setMessage({ ...message, name: e.target.value })}  ></input></p>
        <p className="contact-paragraf" type="Email:"><input className="contact-input" placeholder="Let us know how to contact you back.." onChange={(e) => setMessage({ ...message, mail: e.target.value })} ></input></p>
        <p className="contact-paragraf" type="Message:"><textarea className="contact-textarea" placeholder="What would you like to tell us.." onChange={(e) => setMessage({ ...message, messages: e.target.value })} ></textarea></p>
        <button className="contact-button" submit={handleSubmit} >Send Message</button>
      </form>
    </div>

  )
}
export default ContactUs



