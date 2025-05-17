import AboutUs from './AboutUs/AboutUs';
import OurBest from './OurBest/OurBest';

import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <AboutUs />
			<OurBest />
    </div>
  );
}

export default HomePage;