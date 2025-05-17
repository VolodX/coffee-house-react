import { useState } from 'react';
import coffeeData from '@/data/coffee';
import CoffeeList from '@/components/CoffeeList/CoffeeList';

import './ForYourPleasurePage.css';

function ForYourPleasurePage() {
  const [coffee] = useState(coffeeData);

  return (
    <div className="for-your-pleasure-page">
      <section className="about-goods-section">
        <div className="about-goods-content">
          <div className="about-goods-image">
            <img src="/src/assets/images/about_goods.jpg" alt="Cup of coffee" />
          </div>
          <div className="about-goods-text">
            <h2 className="section-title">About our goods</h2>
            <div className="divider">
              <img src="/images/coffee-beans-black.svg" alt="Coffee beans" className="divider-icon" />
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

			<CoffeeList data={coffee} />

    </div>
  );
}

export default ForYourPleasurePage;