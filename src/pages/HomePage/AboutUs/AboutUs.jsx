import Divider from '../../UI/Divider/Divider';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us__title">About Us</h2>
      <Divider variant="black" />
      <div className="about-us__content">
        <p>
          Our story began with a deep love for coffee. We believe that every cup should be a source of energy and true pleasure, transforming an ordinary moment into a small ritual. We are dedicated to finding and selecting the best coffee beans from around the world, working with farmers who share our commitment to quality and sustainability. Our mission is to share this exceptional coffee with you, ensuring every day is filled with unparalleled taste and aroma.
        </p>
        <br />
        <p>
          We meticulously control every stage, from roasting the beans to unlock their full flavor potential, to packaging and fast delivery to ensure maximum freshness. We strive not just to sell coffee, but to help you create the ideal coffee ritual at home. That's why, in addition to our premium coffee beans, we also offer a curated selection of accessories and equipment to complement your ritual and allow you to fully savor your favorite beverage. Every product in our range undergoes rigorous quality checking before it reaches you.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;