import React from 'react';
import './Footer.css';
import footerLogo from './logo-white.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div className="root">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <Link to='/' className="footerLogo">
                            <img src={footerLogo} alt='logo' height='150px' />
                        </Link>
                        <div className="footer-social">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Menu'>Menu</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Reservation'>Reservation</Link></li>
                            <li><Link to='/Order'>Order Now</Link></li>
                            <li><Link to='/Login'>Log in</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <div className="footer-contact">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Pisa, Chicago, IL 67676</p>
                            <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7891</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> customer@littlelemon.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-credits">
                    &copy; {new Date().getFullYear()} Little Lemon Restaurant
                </div>
            </footer>
        </div>
    );
}

export default Footer;
