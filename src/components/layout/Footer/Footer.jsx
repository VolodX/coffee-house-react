import {Link} from 'react-router-dom';
import Divider from '@/components/UI/Divider/Divider';

import '@/components/UI/NavLink/NavLink.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/" className="footer__link link--logo link--logo-black">
              Coffee house
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/our-coffee" className="footer__link">
              Our coffee
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/for-your-pleasure" className="footer__link">
              For your pleasure
            </Link>
          </li>
        </ul>
      </nav>
      <Divider variant="black" />
      <div className="footer__copyright">
        © {new Date().getFullYear()} Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
