import React from 'react';
import './CSS/AddCar.css';

export default () => {
	return (
		<div className="container">
			<div className="box">
				<form className="form">
					<input
						className="year"
						type="number"
						placeholder="Year ex. 2015"
					/>
					<input className="make" placeholder="Make ex. Honda" />
					<input className="model" placeholder="Model ex. Accord" />
					<input
						className="service"
						placeholder="Service ex. Set of 4"
					/>
					<br />
					<button className="submitButton">Submit</button>
					<button className="clearButton">Clear</button>
				</form>
			</div>
		</div>
	);
};
