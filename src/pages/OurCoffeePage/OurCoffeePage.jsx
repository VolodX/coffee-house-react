import './OurCoffeePage.css';

function OurCoffeePage() {
  return (
    <div className="our-coffee-page">
      <section className="hero-section our-coffee-hero">
        <h1 className="page-title">Our Coffee</h1>
      </section>

      <section className="about-beans-section">
        <div className="about-beans-content">
          <div className="about-beans-image">
            <img src="/src/assets/images/our_beans.jpg" alt="Woman with coffee" />
          </div>
          <div className="about-beans-text">
            <h2 className="section-title">About our beans</h2>
            <div className="divider">
              <img
                src="/images/coffee-beans-black.svg"
                alt="Coffee beans"
                className="divider-icon"
              />
            </div>
            <p>
              Our coffee beans are sourced from various regions around the
              world, each with its own unique flavor profile and
              characteristics. We work directly with farmers to ensure fair
              trade practices and sustainable farming methods.
            </p>
            <p>
              Each batch of beans is carefully roasted to perfection, bringing
              out the best flavors and aromas. Whether you prefer a light,
              medium, or dark roast, we have something to satisfy every coffee
              enthusiast.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />
    </div>
  );
}

export default OurCoffeePage;
