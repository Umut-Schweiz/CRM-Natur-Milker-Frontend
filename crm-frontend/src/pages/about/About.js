import React from 'react';
import './About.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';



const About = () => {

    return (
        <>
        <Navbar/>
        <div className="about-body">
            <div className="about-section">
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                    </p>
                    <div className="skills">
                       <button className="about-read-me-button">Read Me</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About