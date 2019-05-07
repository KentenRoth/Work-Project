import React, { Component } from 'react';
import CardList from './CardList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		};
	}
	componentDidMount() {
		fetch('/cars.json')
			.then(response => response.json())
			.then(data => this.setState(data));
	}

	render() {
		return <CardList cars={this.state.cars} />;
	}
}

export default App;
