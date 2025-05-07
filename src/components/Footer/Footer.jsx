import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
<footer className="footer">
<div className='footer-container grid'>
    <div className='footer-content'>
     <div className='footer-logo'>XOMART</div>
     <h3 className='footer-subtitle'>Contect</h3>
     <p className='footer-description'>
        <span className='footer-subtitle'>Addres:</span> 562 Wellington Road, Street 32, San Francisco</p>
        <p className="footer-description">
        <span className='footer-subtitle'>Toll Free:</span> +91 1800630000</p> 
        <p className="footer-description">
        <span className='footer-subtitle'>phone:</span> +91 1800015999</p>  

        <div className='footer-socal'>
        <h4 className="footer-subtitle">follow me :</h4>
        <div className='footer-socal-links  footer-link-icon'>
        <i className="fa-brands fa-facebook-f  footer-link-icon"></i>
        <i className="fa-brands fa-instagram  footer-link-icon"></i>
        <i className="fa-brands fa-youtube  footer-link-icon"></i>
        <i className="fa-brands fa-twitter  footer-link-icon"></i>
        </div>
     </div> 
  </div>

<div className="footer-content">
      <h3 className="footer-title">My Account</h3>
      <ul className="footer-links">
        <li><NavLink to="/signin" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Sign In</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>View Cart</NavLink></li>
        <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>My Wishlist</NavLink></li>
        <li><NavLink to="/track-order" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Track My Order</NavLink></li>
        <li><NavLink to="/help" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Help</NavLink></li>
        <li><NavLink to="/orders" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Orders</NavLink></li>
      </ul>
    </div>

    <div className="footer-content">
      <h3 className="footer-title">Addres</h3>
      <ul className="footer-links">
        <li><NavLink to="/signin" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Home</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>About Us</NavLink></li>
        <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Contect Us</NavLink></li>
        <li><NavLink to="/track-order" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Delivery Information</NavLink></li>
        <li><NavLink to="/orders" className={({ isActive }) => isActive ? "active footer-link" : "footer-link"}>Support Center</NavLink></li>
      </ul>
    </div>
    
    <div className="footer-content">
  <h3 className="footer-title">Secured Payment Gateway</h3>
  <img src="https://forum.opencart.com/download/file.php?id=28877" alt="" className="payment-img" />
</div>
</div>
<div className='footer-bottom'>
    <p className='copyright'>&copy;2025 Evara. All rights reserved.</p>
    <span className="designer">MADE WITH <i className="fa-solid fa-heart"></i> SUHAIL</span>
</div>
</footer>
  );
}