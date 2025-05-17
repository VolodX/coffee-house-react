import Divider from '@/components/UI/Divider/Divider';
import './OurBest.css';

import solimo from '@/assets/images/coffee-items/item1.jpg';
import presto from '@/assets/images/coffee-items/item2.jpg';
import aromistico from '@/assets/images/coffee-items/item3.jpg';

const coffeeItems = [
  {id: 1, title: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: solimo, alt: "Solimo Coffee"},
  {id: 2, title: 'Presto Coffee Beans 1 kg', price: '15.99$', img: presto, alt: "Presto Coffee"},
  {id: 3, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: aromistico, alt: "AROMISTICO Coffee"}
];

function OurBest({title = 'Our Best'}) {
  return (
    <section className="our-best">
      <h2 className="section-title">{title}</h2>
      <Divider variant="black" />
      <div className="our-best__items">
        {coffeeItems.map(item => (
          <div key={item.id} className="our-best__items__card">
            <img
              src={item.img}
              alt={item.alt}
              className="our-best__items__image"
            />
            <h3 className="our-best__items__title">{item.title}</h3>
            <p className="our-best__items__price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurBest;
