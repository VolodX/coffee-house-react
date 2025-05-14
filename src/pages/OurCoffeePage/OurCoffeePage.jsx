import {useState} from 'react';
import {useMemo} from 'react';

import './OurCoffeePage.css';
import SearchFilter from '@/components/SearchFilter/SearchFilter';
import CoffeeList from '@/components/CoffeeList/CoffeeList';
import coffeeData from '@/data/coffee';

function OurCoffeePage() {
  const [query, setQuery] = useState('');

  const updateSearch = query => {
    setQuery(query);
  };

  const searchCoffee = (items, query) => {
    if (query.length === 0) return items;

    return items.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  const visibleData = useMemo(() => searchCoffee(coffeeData, query), [query]);
  return (
    <div className="our-coffee-page">
      <section className="about-beans-section">
        <div className="about-beans-content">
          <div className="about-beans-image">
            <img
              src="/src/assets/images/our_beans.jpg"
              alt="Woman with coffee"
            />
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
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p>
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. <br /> As greatly removed
              calling pleased improve an. Last ask him cold feel met spot shy
              want. Children me laughing we prospect answered followed. At it
              went is song that held help face.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <SearchFilter onUpdateSearch={updateSearch} />

      <div className="coffee-list">
        <CoffeeList data={visibleData} />
      </div>
    </div>
  );
}

export default OurCoffeePage;
