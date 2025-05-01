import { useState } from 'react';

import './ForYourPleasurePage.css';

import { goodsData } from '../../data/coffeeData';

function ForYourPleasurePage() {
  const [goods] = useState(goodsData);

  return (
    <div className="for-your-pleasure-page">
      <section className="hero-section for-pleasure-hero">
        <h1 className="page-title">For Your Pleasure</h1>
      </section>

      <section className="about-goods-section">
        <div className="about-goods-content">
          <div className="about-goods-image">
            <img src="/images/coffee-cup.jpg" alt="Cup of coffee" />
          </div>
          <div className="about-goods-text">
            <h2 className="section-title">About our goods</h2>
            <div className="divider">
              <img src="/images/coffee-beans-dark.svg" alt="Coffee beans" className="divider-icon" />
            </div>
            <p>
              Besides our premium coffee beans, we offer a selection of coffee-related 
              goods to elevate your coffee experience. From specialized brewing equipment 
              to elegant coffee cups, we have everything you need to enjoy your favorite 
              beverage at home.
            </p>
            <p>
              Each product is carefully selected to ensure the highest quality and durability. 
              Our team tests every item to guarantee that it meets our strict standards 
              before making it available to our customers.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

    </div>
  );
}

export default ForYourPleasurePage;