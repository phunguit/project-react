import * as Types from '../constants/ActionTypes';
var defaultState = {

}

export var itemSelected = (state = defaultState, action) => {
	switch(action.type) {
		case Types.SELECT_ITEM:
			return action.item;
		default:
			return state;
	}

}