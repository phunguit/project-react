import * as Types from '../constants/ActionTypes';

var defaultState = false;

export let isShowForm = (state = defaultState, action) => {
	switch(action.type) {
		case Types.CLOSE_FORM:
			return false;

		case Types.OPEN_FORM:
			return true;

		case Types.TOGGER_FORM:
			return !state;
			
		default:
			return state;
	}
}