import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <footer className="footer">
            <div className="footer-column">
              <h2>About Us</h2>
              <p>
                Overview <br />
                History <br />
                Initiative <br />
                Compliance <br />
                Board of Directors <br />
                Amalgamation<br />
                Offices & Branches<br />
                Social Commitment<br />
                Awards<br />
                Green Initiatives by Bank<br />
                Subsidiaries and Joint Ventures<br />
                Baroda Alok Chandra Bravery Award<br />
                Human Resources<br />
                Careers
              </p>
            </div>
            <div className="footer-column">
              <h2>Contact Us</h2>
              <p>Email: heartlesspatidar@gmail.com</p>
              <p>Phone: +9770289964</p>
              <p>Address: 455227, Dewas, Iklera</p>
            </div>
            <div className="footer-column">
              <h2>Follow Us</h2>
                <ul>
                  <li><a href="https://example.com"><FontAwesomeIcon icon={faLocationDot} /> Location</a></li><br />
                  <li><a href="https://example.com"><FontAwesomeIcon icon={faWhatsapp} /> WhatShapp</a></li><br />
                  <li><a href="https://example.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li><br />
                  <li><a href="https://example.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a></li><br />
                  <li><a href="https://example.com"><FontAwesomeIcon icon={faComment} /> Message</a></li><br />
                </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
