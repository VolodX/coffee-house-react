import {Link} from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Everything You Love About Coffee</h1>
          <div className="divider">
            <Link to="/">
              <img
                src="/images/coffee-beans-white.svg"
                alt="Coffee beans"
                className="divider-icon"
              />
            </Link>
          </div>
          <p className="hero-subtitle">
            We make every day full of energy and taste
          </p>
          <p className="hero-description">Want to try our beans?</p>
          <Link to="/our-coffee" className="hero-button">
            More
          </Link>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="divider">
          <img
            src="/images/coffee-beans-black.svg"
            alt="Coffee beans"
            className="divider-icon"
          />
        </div>
        <div className="about-content">
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
					<br />
          <p>
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </div>
      </section>

      <section className="best-section">
        <h2 className="section-title">Our Best</h2>
        <div className="divider">
          <img
            src="/images/coffee-beans-black.svg"
            alt="Coffee beans"
            className="divider-icon"
          />
        </div>
        <div className="best-items">
          {/* Для прикладу, можна додати статичні карточки продуктів */}
          <div className="coffee-card">
            <img
              src="src/assets/images/coffee-items/item1.jpg"
              alt="Solimo Coffee"
              className="coffee-image"
            />
            <h3 className="coffee-title">Solimo Coffee Beans 2 kg</h3>
            <p className="coffee-price">10.73$</p>
          </div>
          <div className="coffee-card">
            <img
              src="src/assets/images/coffee-items/item2.jpg"
              alt="Presto Coffee"
              className="coffee-image"
            />
            <h3 className="coffee-title">Presto Coffee Beans 1 kg</h3>
            <p className="coffee-price">15.99$</p>
          </div>
          <div className="coffee-card">
            <img
              src="src/assets/images/coffee-items/item3.jpg"
              alt="AROMISTICO Coffee"
              className="coffee-image"
            />
            <h3 className="coffee-title">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee-price">6.99$</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
