import React from 'react';
import CarCard from './CarCard';
import './CSS/Card.css';

const CardList = props => {
	return (
		<div class="container">
			<div class="CardList">
				<CarCard />
			</div>
		</div>
	);
};

export default CardList;
