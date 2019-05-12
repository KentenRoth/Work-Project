import React, { Component } from 'react';
import './CSS/AddCar.css';

class AddCar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: '',
			make: '',
			model: '',
			service: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	handleChange = e => {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
	};

	handleClear = () => {
		this.setState({
			year: '',
			make: '',
			model: '',
			service: ''
		});
	};

	render() {
		return (
			<div className="container">
				<div className="box">
					<form className="form">
						<input
							className="year"
							type="number"
							value={this.state.year}
							onChange={this.handleChange}
							name="year"
							placeholder="Year ex. 2015"
						/>
						<input
							className="make"
							value={this.state.make}
							onChange={this.handleChange}
							name="make"
							placeholder="Make ex. Honda"
						/>
						<input
							className="model"
							value={this.state.model}
							onChange={this.handleChange}
							name="model"
							placeholder="Model ex. Accord"
						/>
						<input
							className="service"
							value={this.state.service}
							onChange={this.handleChange}
							name="service"
							placeholder="Service ex. Set of 4"
						/>
						<br />
						<button
							type="button"
							onClick={this.handleSubmit}
							className="submitButton"
						>
							Submit
						</button>
						<button
							type="button"
							onClick={this.handleClear}
							className="clearButton"
						>
							Clear
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddCar;
