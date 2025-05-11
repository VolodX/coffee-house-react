// import { Link } from 'react-router-dom';
import Navigation from '@/components/navigation/Navigation';
import {headerConfig} from '@/config/headerConfig';
import './Header.css';
import './Header.theme.css';

function Header( {currentPath} ) {
  const config = headerConfig[currentPath] || {};
  const {Component: HeroComponent, bgClass = ''} = config;

  return (
    <header className={`header ${bgClass}`}>
      <div className="header__top">
        <Navigation />
        {HeroComponent && <HeroComponent />}
      </div>
    </header>
  );
}

export default Header;
