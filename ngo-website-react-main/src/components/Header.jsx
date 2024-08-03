import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseGlobal from "../hooks/UseGlobal";
import "./Header.css"

const Header = ({ path, User }) => {
  const [Toggle, setToggle] = useState("");
  console.log(User, "hello");
  return (
    <header>
      {/* <div class="logo-container">
        <Link to="/">
          <img src="assets/ribbon.png" class="logo" />
        </Link>
        <Link to="/">
          <div class="logo-text">
            <h1 class="logo-header">NON PROFIT</h1>
            <p>ORGANISATION</p>
          </div>
        </Link>
      </div> */}

      <div class="ham-btn">
        {Toggle == "active" ? (
          <i
            class="fa fa-times"
            onClick={() => {
              setToggle("");
            }}
          ></i>
        ) : (
          <i
            class="fa fa-solid fa-bars"
            onClick={() => {
              setToggle("active");
            }}
          ></i>
        )}
      </div>
      <div
        class={"header-links " + Toggle}
        onClick={() => {
          setToggle("");
        }}
      >
        <ul className="scroll-auto">
          <Link to="/" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/" ? "red" : "" }}>
                Home
              </a>
            </li>
          </Link>
          <div class="dropdown">
  <button class="dropbtn">About Us<span class="caret"></span></button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

          <Link to="/events" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/events" ? "red" : "" }}>
                Activities
              </a>
            </li>
          </Link>
          <Link to="https://courses.deshyoga.org" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="https://courses.deshyoga.org" style={{ color: path == "/causes" ? "red" : "" }}>
                COURSES
              </a>
            </li>
          </Link>
          
          <Link to="/news" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/news" ? "red" : "" }}>
                Reviews
              </a>
            </li>
          </Link>
          <Link to="/news" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/news" ? "red" : "" }}>
                Gallery
              </a>
            </li>
          </Link>
          <Link to="/news" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/news" ? "red" : "" }}>
                Donate
              </a>
            </li>
          </Link>
          <Link to="/membership" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/membership" ? "red" : "" }}>
                Membership
              </a>
            </li>
          </Link>
          <Link to="login" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/login" ? "red" : "" }}>
                <i class="fa fa-user" aria-hidden="true"></i>
                {User && User.username ? User.username : " Sign in"}
              </a>
            </li>
          </Link>
          <Link to="contact" className="w-[100%] lg:w-auto" class="navtext">
            <li>
              <a href="#" style={{ color: path == "/contact" ? "red" : "" }}>
                Contact Us
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
