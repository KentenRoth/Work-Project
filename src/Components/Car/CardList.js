import React from 'react';
import CarCard from './CarCard';
import './CSS/Card.css';

const CardList = props => {
	const carInfo = props.cars.map(info => {
		return <CarCard key={info.keytag} car={info} />;
	});
	return (
		<div className="container">
			<div className="CardList">
				<div className="cardListItems">{carInfo}</div>
			</div>
		</div>
	);
};

export default CardList;
