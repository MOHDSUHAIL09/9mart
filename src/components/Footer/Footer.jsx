import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-content">
            <div className="footer-column">
                <Logo width="120px" />
                <p className="footer-text">&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
            </div>

            <div className="footer-column">
                <h3 className="footer-title">Company</h3>
                <ul>
                    <li><Link to="/" className="footer-link">Features</Link></li>
                    <li><Link to="/" className="footer-link">Pricing</Link></li>
                    <li><Link to="/" className="footer-link">Affiliate Program</Link></li>
                    <li><Link to="/" className="footer-link">Press Kit</Link></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3 className="footer-title">Support</h3>
                <ul>
                    <li><Link to="/" className="footer-link">Account</Link></li>
                    <li><Link to="/" className="footer-link">Help</Link></li>
                    <li><Link to="/" className="footer-link">Contact Us</Link></li>
                    <li><Link to="/" className="footer-link">Customer Support</Link></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3 className="footer-title">Legals</h3>
                <ul>
                    <li><Link to="/" className="footer-link">Terms &amp; Conditions</Link></li>
                    <li><Link to="/" className="footer-link">Privacy Policy</Link></li>
                    <li><Link to="/" className="footer-link">Licensing</Link></li>
                </ul>
            </div>
        </div>

        <div className="footer-social">
            <div className="social-links">
                <Link to="/" className="social-link">Facebook</Link>
                <Link to="/" className="social-link">Twitter</Link>
                <Link to="/" className="social-link">Instagram</Link>
                <Link to="/" className="social-link">LinkedIn</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
