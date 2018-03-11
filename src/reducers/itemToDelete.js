import * as Types from '../constants/ActionTypes';

const defaultState = null;

export let itemToDelete = (state = defaultState, action) => {
	switch(action.type) {

		case Types.DELETE:
			return action.id;
		
		default:
			return state;
	}
}