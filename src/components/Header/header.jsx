import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link nav-link--logo nav-link--logo-white">
                Coffee house
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/our-coffee" className="header__nav-link">Our coffee</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/for-your-pleasure" className="header__nav-link">For your pleasure</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__hero">
        <div className="header__hero-content">
          <h1 className="header__hero-title">Everything You Love About Coffee</h1>
          <div className="header__hero-divider">
            <Link to="/">
              <img
                src="/images/coffee-beans-white.svg"
                alt="Coffee beans"
                className="header__hero-divider-icon"
              />
            </Link>
          </div>
          <p className="header__hero-subtitle">
            We make every day full of energy and taste
          </p>
          <p className="header__hero-description">Want to try our beans?</p>
          <Link to="/our-coffee" className="header__hero-button">
            More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;