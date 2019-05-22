import React, { Component } from 'react';
import './CSS/Card.css';

class CarCard extends Component {
	render() {
		const { _id, keytag, year, make, model, service } = this.props.car;

		return (
			<div className="card">
				<h1>{keytag}</h1>
				<hr />
				<h2>{year}</h2>
				<h2>{make}</h2>
				<h2>{model}</h2>
				<hr />
				<h3>{service}</h3>
				<button
					className="deleteButton"
					onClick={() => {
						this.props.onDeleteClick(_id);
					}}
				>
					Car Completed
				</button>
			</div>
		);
	}
}

export default CarCard;
