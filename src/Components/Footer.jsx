import React from 'react';
import '../Styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are a leading company providing top-notch services and solutions tailored for your business needs.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>123 Business Road, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@business.com</p>
          </div>
         
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Business Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
