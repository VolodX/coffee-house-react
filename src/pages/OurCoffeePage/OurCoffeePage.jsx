import {useState} from 'react';
import {useMemo} from 'react';

import SearchFilter from '@/components/SearchFilter/SearchFilter';
import CoffeeList from '@/components/CoffeeList/CoffeeList';
import coffeeData from '@/data/coffee';
import ourBeans from "@/assets/images/our_beans.jpg"

import './OurCoffeePage.css';

function OurCoffeePage() {
  const [query, setQuery] = useState('');
  const [filterOrigin, setFilterOrigin] = useState('All');

  // Search-query
  const updateSearch = query => setQuery(query);

  const searchCoffee = (items, query) => {
    if (query.length === 0) return items;

    return items.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase()); 
    });
  };

  // Filter cards
  const selectFilter = filter => setFilterOrigin(filter);

  const filterCards = (items, filter) => {
		if (!filter || filter === 'All') return items;
		return items.filter(item => item.origin === filter);
  };

  const visibleData = useMemo(
    () => filterCards(searchCoffee(coffeeData, query), filterOrigin),
    [query, filterOrigin]
  );

  return (
    <div className="our-coffee-page">
      <section className="about-beans-section">
        <div className="about-beans-content">
          <div className="about-beans-image">
            <img
              src={ourBeans}
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

      <SearchFilter filterOrigin={filterOrigin} onUpdateSearch={updateSearch} onSelectFilter={selectFilter} />

      <div className="coffee-list">
        <CoffeeList data={visibleData} />
      </div>
    </div>
  );
}

export default OurCoffeePage;
