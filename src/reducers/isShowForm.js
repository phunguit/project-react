import * as types from './../constants/ActionTypes';

var defaultState = false;

export let isShowForm = (state = defaultState, action) => {
	switch(action.type) {
		case types.CLOSE_FORM:
			state = false;
			return state;

		case types.OPEN_FORM:
			state = true;
			return state;

		case types.TOGGER_FORM:
			state = !state;
			return state;
			
		default:
			return state;
	}
}