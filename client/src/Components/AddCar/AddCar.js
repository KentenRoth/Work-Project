import React, { Component } from 'react';
import { addCar } from '../../actions/carActions';
import './CSS/AddCar.css';
import { connect } from 'react-redux';

function validate(keytag, year, make, model, service) {
	const errors = [];
	const keytagRegex = new RegExp(/([0-9]{6})/g);
	const yearRegex = new RegExp(/([0-9]{4})/g);

	if (keytagRegex.test(keytag) === false) {
		errors.push('Keytag must be 6 numbers');
	}
	if (yearRegex.test(year) === false) {
		errors.push('Year needs to be formatted like YYYY');
	}
	if (make.length === 0) {
		errors.push('Please enter the Make of the vehicle ');
	}
	if (model.length === 0) {
		errors.push('Please enter the Model of the vehicle');
	}
	if (service.length === 0) {
		errors.push('Please enter the requested service');
	}

	return errors;
}

class AddCar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keytag: '',
			year: '',
			make: '',
			model: '',
			service: '',
			errors: []
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		const { keytag, year, make, model, service } = this.state;

		const errors = validate(keytag, year, make, model, service);
		if (errors.length > 0) {
			this.setState({ errors });
			return;
		}

		const newCar = {
			keytag: keytag,
			year: year,
			make: make,
			model: model,
			service: service
		};

		this.props.addCar(newCar);
		this.handleClear();
	};

	handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleClear = () => {
		this.setState({
			keytag: '',
			year: '',
			make: '',
			model: '',
			service: '',
			errors: []
		});
	};

	checkScreen = () => {
		this.props.history.push('/cars');
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="box">
					<button
						className="carScreenButton"
						onClick={this.checkScreen}
					>
						Car Screen
					</button>
					{errors.map(error => (
						<p key={error}>Error: {error}</p>
					))}

					<form className="form" onSubmit={this.handleSubmit}>
						<input
							className="keytag"
							type="number"
							value={this.state.keytag}
							onChange={this.handleChange}
							name="keytag"
							placeholder="Keytag ex. 123456"
						/>
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
						<button type="submit" className="submitButton">
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

const mapStateToProps = state => ({
	car: state.car
});

export default connect(
	mapStateToProps,
	{ addCar }
)(AddCar);
