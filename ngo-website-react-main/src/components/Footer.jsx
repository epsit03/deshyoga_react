import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (

    <footer className="footer">
      <div className="footer-content">   
        <div className="footer-section about">
          {/* <h1 className="logo-text">Logo</h1> */}
          <img src="../assets/swami_ji_dp.webp" class="swamijidp"/>
          
          </div>

        <div className="footer-section">
        <u><h3>Quick Links</h3></u>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <u><h3>Contact Us</h3></u>
          <p>Your address</p>
          <p>Your email</p>
          <p>Your phone number</p>
        </div>
      </div>
      <div className="footer-add">KH.No 1001, Ground floor, Street No 14/1,<br/>
Village Jagatpur Extension, Delhi 110084<br/>
deshyoga2017@gmail.com</div>
    </footer>
    
  );
};

export default Footer;
