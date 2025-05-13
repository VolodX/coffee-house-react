import Divider from '../../UI/Divider/Divider';
import './OurBest.css';

const coffeeItems = [
  { id: 1, title: 'Solimo Coffee Beans 2 kg', price: '10.73$' },
  { id: 2, title: 'Presto Coffee Beans 1 kg', price: '15.99$' },
  { id: 3, title: 'AROMISTICO Coffee 1 kg', price: '6.99$' },
];

function OurBest({ title = 'Our Best' }) {
  return (
    <section className="coffee-list">
      <h2 className="coffee-list__title">{title}</h2>
      <Divider variant="black" />
      <div className="coffee-list__items">
        {coffeeItems.map((item) => (
          <div key={item.id} className="coffee-card">
            <div className="coffee-card__image" /> {/* Заглушка замість зображення */}
            <h3 className="coffee-card__title">{item.title}</h3>
            <p className="coffee-card__price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurBest;