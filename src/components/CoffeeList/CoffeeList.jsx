import './CoffeeList.css';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { memo } from 'react';

const CoffeeList = ({data}) => {
  if (!Array.isArray(data) ||data.length === 0) {
    return <p className="coffee-list__empty tac">No coffee items available.</p>;
  }

  const elements = data.map(({id, ...itemProps}) => (
    <CoffeeCard key={id} {...itemProps} />
  ));

  return <div className="coffee-list__items">{elements}</div>;
};

export default memo(CoffeeList);
