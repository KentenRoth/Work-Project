import React, { Component } from 'react';
import CarCard from './CarCard';
import './CSS/Card.css';

class CardList extends Component {
	render() {
		const carInfo = this.props.cars.map(info => {
			return (
				<CarCard
					onDeleteClick={this.props.onDeleteClick}
					key={info.keytag}
					car={info}
				/>
			);
		});
		return (
			<div className="container">
				<div className="CardList">
					<div className="cardListItems">{carInfo}</div>
				</div>
			</div>
		);
	}
}

export default CardList;
