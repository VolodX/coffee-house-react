import './Divider.css';

function Divider({ variant = 'black' }) {
  const iconSrc = variant === 'white' ? '/images/coffee-beans-white.svg' : '/images/coffee-beans-black.svg';

  return (
    <div className="divider">
      <img src={iconSrc} alt="Coffee beans" className="divider__icon" />
    </div>
  );
}

export default Divider;