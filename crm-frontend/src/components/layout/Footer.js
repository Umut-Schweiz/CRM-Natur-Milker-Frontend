import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-footer">
                <img src="../images/Natur Milker Logo.png" alt="natur-milker" />
            </div>

            <div className="allright-footer">
                <p>All rights reserved by ©Umut-Schweiz 2021 </p>
            </div>

            <div className="footer-icon">
                <i className="fab fa-facebook fa-3x"></i>
                <i className="fab fa-instagram fa-3x"></i>
                <i className="fab fa-youtube fa-3x"></i>
                <i className="fab fa-linkedin fa-3x"></i>
            </div>

        </footer>

    )
}

export default Footer
