import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, to, variant = 'outline-white' }) {
  return (
    <Link to={to} className={`button button--${variant}`}>
      {children}
    </Link>
  );
}

export default Button;