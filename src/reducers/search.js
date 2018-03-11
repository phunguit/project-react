import * as Types from '../constants/ActionTypes';

var defaultState = '';

export const search = (state = defaultState, action) => {
	switch(action.type) {
		case Types.SEARCH:
			return action.strSearch;
		default:
			return state;
	}
}