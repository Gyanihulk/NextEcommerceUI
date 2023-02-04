import React from "react";

const Header = () => {
  return (
    <div id="header_content">
      <div className="first_h">
        <p>⚡️ हरे कृष्ण   ⚡️   Hare Krishnaa ⚡️</p>
      </div>
      <div className="second_h">
        <nav className="nav_f">
          <a href="" className="link">
            Home
          </a>
          <a href="" className="link">
            Most Selling
          </a>
          <a href="" className="link">
            Latest Collection
          </a>
          <a href="" className="link">
            Categories
          </a>
          <a href="" className="link">
            Happy Family
          </a>
          <a href="" className="link">
            About Us
          </a>
        </nav>
        <div className="logo_area">
          <a href="" className="logo_link">
            <h2 className="logo">Krishna Shringar.</h2>
          </a>
        </div>
        <div className="drawer_icon">
          <a href="">
            <span className="dot">
              <i className="fa-solid fa-bars"></i>
            </span>
          </a>
        </div>
       
        <div className="icons">
          <ul>
            <li className="list">
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="list">
              <i className="fa-regular fa-user"></i>
            </li>
            <li className="list">
              <i className="fa-regular fa-heart"></i>
            </li>
            <li className="list">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
