import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className='header__logo-link'>
					<img src="/images/coffee-logo.svg" alt="Coffee logo" className="header__logo-img" />
				</Link>
      </div>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Coffee house</Link>
          </li>
          <li className="nav__item">
            <Link to="/our-coffee" className="nav__link">Our coffee</Link>
          </li>
          <li className="nav__item">
            <Link to="/for-your-pleasure" className="nav__link">For your pleasure</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;