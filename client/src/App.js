import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Car from './Components/Car/Car';
import AddCar from './Components/AddCar/AddCar';
import Login from './Components/Login/Login';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={AddCar} />
						<Route path="/login" component={Login} />
						<Route path="/cars" component={Car} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
