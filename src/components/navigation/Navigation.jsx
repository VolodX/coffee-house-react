// import NavLink from '../../common/NavLink/NavLink';
import { Link } from 'react-router-dom';

import '../common/NavLink/NavLink.css'
import './Navigation.css';

function Navigation() {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link link--logo link--logo-white"
          >
            Coffee house
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/our-coffee" className="nav__link">
            Our coffee
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/for-your-pleasure" className="nav__link">
            For your pleasure
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
