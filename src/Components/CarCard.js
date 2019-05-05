import React from 'react';
import './CSS/Card.css';

const CarCard = props => {
	const { keytag, year, make, model, service } = props.car;
	return (
		<div className="card">
			<h1>{keytag}</h1>
			<hr />
			<h2>{year}</h2>
			<h2>{make}</h2>
			<h2>{model}</h2>
			<hr />
			<h3>{service}</h3>
		</div>
	);
};

export default CarCard;
