import './HomePage.css';
import AboutUs from './AboutUs/AboutUs';

function HomePage() {
  return (
    <div className="home-page">
      <AboutUs />

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
          <div className="best-items__card">
            <img
              src="src/assets/images/coffee-items/item1.jpg"
              alt="Solimo Coffee"
              className="best-items__image"
            />
            <h3 className="best-items__title">Solimo Coffee Beans 2 kg</h3>
            <p className="best-items__price">10.73$</p>
          </div>
          <div className="best-items__card">
            <img
              src="src/assets/images/coffee-items/item2.jpg"
              alt="Presto Coffee"
              className="best-items__image"
            />
            <h3 className="best-items__title">Presto Coffee Beans 1 kg</h3>
            <p className="best-items__price">15.99$</p>
          </div>
          <div className="best-items__card">
            <img
              src="src/assets/images/coffee-items/item3.jpg"
              alt="AROMISTICO Coffee"
              className="best-items__image"
            />
            <h3 className="best-items__title">AROMISTICO Coffee 1 kg</h3>
            <p className="best-items__price">6.99$</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;