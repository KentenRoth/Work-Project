import { GET_CARS, ADD_CAR, DELETE_CAR } from '../actions/types';
import uuid from 'uuid';

const initialState = {
	cars: [
		{
			id: uuid(),
			keytag: 98734,
			year: 2013,
			make: 'Acura',
			model: 'ILX',
			service: 'Set of 4'
		},
		{
			id: uuid(),
			keytag: 98735,
			year: 2016,
			make: 'Honda',
			model: 'Accord',
			service: 'Set of 2'
		},
		{
			id: uuid(),
			keytag: 98736,
			year: 2012,
			make: 'Toyota',
			model: 'Camry',
			service: 'Head Light Restoration'
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CARS:
			return {
				...state
			};
		case DELETE_CAR:
			return {
				...state,
				cars: state.cars.filter(car => car.id !== action.payload)
			};
		default:
			return state;
	}
}
