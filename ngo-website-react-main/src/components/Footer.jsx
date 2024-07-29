import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
    <footer>
  

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <p> <h1>OUR VISION</h1></p> 
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            </p>
          </div>

          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="/"><div class="footer-l">Home</div></Link>
              </li>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="about"><div class="footer-l">About</div></Link>
              </li>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="causes"><div class="footer-l">Causes</div></Link>
              </li>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="event"><div class="footer-l">Events</div></Link>
              </li>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="news"><div class="footer-l">News</div></Link>
              </li>
              <li>
                {/* <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> */}
                <Link to="contact"><div class="footer-l">Contact</div></Link>
              </li>
            </ul>
          </div>
{/* 
          <div class="gallery">
            <h2
              class="gal-btn"
              onClick={() => {
                setGallery(!Gallery);
              }}
            >
              GALLERY
            </h2>
            <div class={"gal-container " + (Gallery && "gal-container-active")}>
              <div>
                <img src="assets/ga1.png" />
                <img src="assets/ga2.png" />
              </div>
              <div>
                <img src="assets/gap3.png" />
                <img src="assets/gal4.png" />
              </div>
              <div>
                <img src="assets/gal5.png" />
                <img src="assets/gal6.png" />
              </div>
            </div>
          </div> */}

              {/* <section class="contact"> 
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p class="question">DO YOU HAVE A QUESTION?</p>
          <p class="number">+0123 456 789</p>
        </div>
        <div class="contact-2">
          <div>
            <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Enter email"
              className="text-black"
            />
          </div>
          <button 
            onClick={() => {
              alert("subscribed!!!");
            }}
          >
            Subscribe
          </button>
        </div>
       </section> */}

          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h2>Head Office</h2>
                </div>
                <div class="contact-ad">
                  <p>KH.No 1001, Ground floor, Street No 14/1,
                  Village Jagatpur Extension</p>
                  <p>Delhi 110084</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h2>Phone Number</h2>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h2>Email</h2>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
            </div>
          </div>
          <p class="copyright">
            Copyright @ 2024. Developed by Epsit Bhardwaj. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
