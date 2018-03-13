import * as Types from '../constants/ActionTypes';
import { remove } from 'lodash';

var defaultState = [
	{id: '123', name: 'acc', level: 0},
	{id: '321', name: 'bcd', level: 1},
	{id: '456', name: 'def', level: 2}
];

let jobs = JSON.parse(localStorage.getItem('jobs'));

defaultState = (jobs !== null && jobs.length > 0) ? jobs : defaultState;

const items = (state = defaultState, action) => {
	switch(action.type) {
		case Types.DELETE:

			remove(state, (item) => {
	            return item.id === action.id;
          	});

          	localStorage.setItem('jobs', JSON.stringify(state));
			return [...state];	

		default:
			return defaultState;
	}
};

export default items;