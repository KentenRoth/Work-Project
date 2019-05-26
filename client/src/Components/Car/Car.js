import React, { Component } from 'react';
import CardList from './CardList';

import { connect } from 'react-redux';
import { getCars, deleteCar } from '../../actions/carActions';
import PropTypes from 'prop-types';

class App extends Component {
	constructor(props) {
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount() {
		this.props.getCars();
		this.interval = setInterval(() => {
			this.props.getCars();
		}, 60000);
	}

	onDeleteClick(id) {
		this.props.deleteCar(id);
	}

	render() {
		const { cars } = this.props.car;
		return <CardList onDeleteClick={this.onDeleteClick} cars={cars} />;
	}
}

App.propTypes = {
	getCars: PropTypes.func.isRequired,
	car: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	car: state.car
});

export default connect(
	mapStateToProps,
	{ getCars, deleteCar }
)(App);
