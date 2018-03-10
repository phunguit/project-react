import * as Types from '../constants/ActionTypes';

var defaultState = false;

export let isShowForm = (state = defaultState, action) => {
	switch(action.type) {
		case Types.CLOSE_FORM:
			state = false;
			return state;

		case Types.OPEN_FORM:
			state = true;
			return state;

		case Types.TOGGER_FORM:
			state = !state;
			return state;
			
		default:
			return state;
	}
}