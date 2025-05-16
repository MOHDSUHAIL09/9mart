import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  LogoutBtn } from "../index";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const handleSelectChange = (event) => {
    navigate(event.target.value);
    setMenuOpen(false);
  };

  return (
    <>
      {/* 📌 SECTION ==============================>>>>  1 */}
      <nav className="navbar">
        <div className="logo">
         XOMART
        </div>

        <div className="deliver">
          <div className="rotate-location">
            <p className="delivering">Delivering To Moradabad 244001 ➜</p>
            <i className="fa-solid fa-location-dot Location"></i>
          </div>
          <p>Update Location</p>
        </div>

        <div className="search-container11">
          <input type="text" className="input11" placeholder="Search Xomart" />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* 📌 Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li className="dropd">
            <p className="sign-in">Hello, sign in</p>
            <select onChange={handleSelectChange} defaultValue="">
              <option value="" disabled>
                Account & List ▼
              </option>
              <option value="/web-design">Web Design</option>
              <option value="/seo">SEO</option>
              <option value="/marketing">Marketing</option>
            </select>
          </li>

          <div className="user">
            <span className="signin-text">{authStatus && <LogoutBtn />}</span>
            <i className="fa-solid fa-user"></i>
          </div>

          <li className="returns-orders">
            <p>Returns</p>
            <p className="orders">& Orders</p>
          </li>

          <li className="cart-container">
            <div className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">3</span>
            </div>
          </li>
          <div className="logout-desktop">
           {authStatus && <LogoutBtn />}
            </div>
        </ul>
      </nav>


      

      {/* 📌 Navbar (Hamburger + Bottom Navbar) */}
      <div className="navbar-container">
        {/* 📌 Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <i className="fa-solid fa-bars"></i>
          <span className="menu-all">All</span>
        </div>

        {/* 📌 Bottom Navbar */}
        <div className="bottom-nav-loction">
          <ul className="bottom-navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li className="service">
              <select onChange={handleSelectChange} defaultValue="">
                <option value="" disabled>Account & List ▼ </option>
                <option value="/web-design">Web Design</option>
                <option value="/login">Sign In</option>
                <option value="/orders">Your Orders</option>
                <option value="/wishlist">Wishlist</option>
                <option value="/gift-cards">Gift Cards</option>
                <option value="/seo">SEO</option>
                <option value="/marketing">Marketing</option>
                <option value="/faq">Faq</option>
                <option value="/help">Help</option>
              </select>
            </li>
            <li><Link to="/">Todays Deals</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/fashion">Fashion</Link></li>
            <li><Link to="/home">Home & Kitchen</Link></li>
            <li><Link to="/beauty">Beauty</Link></li>
            <li><Link to="/mobiles">Mobiles</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>
      </div>

      {/* 📌 Sidebar Overlay */}
      <div className={`sidebar-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

      {/* 📌 Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        {/* 📌 Close Button */}
        <div className="close-btn">
          <div className="logo-menu">Luxewave</div>
          <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
        </div>

        {/* 📌 Sidebar Links */}
        <ul className="category-links">
          <li><Link to="/">Todays Deals</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/fashion">Fashion</Link></li>
          <li><Link to="/home">Home & Kitchen</Link></li>
          <li><Link to="/beauty">Beauty</Link></li>
          <li><Link to="/mobiles">Mobiles</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/gift-cards">Gift Cards</Link></li>
          {authStatus && <LogoutBtn />}
        </ul>
      </div>
    </>
  );
};

export default Header;
