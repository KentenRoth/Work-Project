import React, { Component } from 'react';
import CardList from './CardList';

import { connect } from 'react-redux';
import { getCars } from '../../actions/carActions';
import PropTypes from 'prop-types';

class App extends Component {
	componentDidMount() {
		this.props.getCars();
	}

	render() {
		const { cars } = this.props.car;
		return <CardList cars={cars} />;
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
	{ getCars }
)(App);
