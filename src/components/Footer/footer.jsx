import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/" className="footer__nav-link">Coffee house</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/our-coffee" className="footer__nav-link">Our coffee</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/for-your-pleasure" className="footer__nav-link">For your pleasure</Link>
          </li>
        </ul>
      </nav>
      <div className="footer__divider">
        <img src="/images/coffee-beans-black.svg" alt="Coffee beans" className="footer__icon" />
      </div>
      <div className="footer__copyright">
        © {new Date().getFullYear()} Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;