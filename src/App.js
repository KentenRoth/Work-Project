import React, { Component } from 'react';
import CardList from './Components/CardList';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keytag: Number,
			year: Number,
			make: '',
			model: '',
			service: ''
		};
	}

	render() {
		return <CardList />;
	}
}

export default App;
