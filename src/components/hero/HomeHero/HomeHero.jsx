import Button from '@/components/common/Button/Button';
import Divider from '@/components/common/Divider/Divider';

import '../hero.css'
import './HomeHero.css';

function HomeHero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Everything You Love About Coffee</h1>
        <Divider variant="white" />
        <p className="hero__subtitle">
          We make every day full of energy and taste
        </p>
        <p className="hero__description">Want to try our beans?</p>
        <Button to="/our-coffee" variant="outline-white">
          More
        </Button>
      </div>
    </div>
  );
}

export default HomeHero;
