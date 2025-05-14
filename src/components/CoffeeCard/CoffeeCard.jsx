import './CoffeeCard.css';

function CoffeeCard({name, origin, price, image}) {
	return (
		<li className="coffee-card">
			<img src={image} alt="Aromistico Coffee" className="coffee-card__img" />
			<h3 className="coffee-card__title">{name}</h3>
			<p className="coffee-card__origin">{origin}</p>
			<p className="coffee-card__price">{price}</p>
		</li>
	)
}

export default CoffeeCard;
