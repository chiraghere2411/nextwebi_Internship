import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="/assets/logo2.png"
            style={{ height: "70px", width: "auto"}}
            alt="Logo"
          />
          <p className="about">
            GSFO Tech Private Limited proudly owns 
            Bagara Biryani Cafe (BBC) – the ultimate
            destination to indulge in a mouthwatering 
            selection of authentic Nattu-style Biryanis.
          </p>
        </div>

        <div className="footer-logo">
          <h3>Quick Links</h3>
          <ul>
            <li>&#9654; Home</li>
            <li>&#9654; About Us</li>
            <li>&#9654; Franchise</li>
            <li>&#9654; Menu</li>
          </ul>
        </div>

        <div className="footer-logo">
          <h3>Address</h3>
          <p>
            #103/(2P),&nbsp;152/2,<br />
            5th floor Uniworld Building Neeladri Nagar Doddathogur<br />
            Electronic City, Bengaluru Karnataka 560100
          </p>
          <br/>
          <h3>Email</h3>
          <p>📧 info@gmail.com</p>
          <br />
          <h3>Phone No</h3>
          <p>📞 +91 9999999999</p>
        </div>

        <div className="footer-logo">
          <h3>Franchise support</h3>
          <p>📞 +91 99999999999</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
