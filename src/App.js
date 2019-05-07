import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Car from './Components/Car/Car';
import AddCar from './Components/AddCar/AddCar';
import Login from './Components/Login/Login';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/addcar" component={AddCar} />
					<Route path="/cars" component={Car} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
