import { createStore } from 'redux';
import { closeForm } from './actions/index';

var defaultState = {
    items : [],
    isShowForm: false,
    strSearch: '',
    orderBy: 'name',
    orderDir: 'desc',
    itemSelected: null
}

let reducers = (state = defaultState, action) => {
	switch(action.type) {
		case 'CLOSE_FORM':
			state.isShowForm = false;
			return state;

		case 'OPEN_FORM':
			state.isShowForm = true;
			return state;

		case 'TOGGER_FORM':
			state.isShowForm = !state.isShowForm;
			return state;
			
		default:
			return state;
	}
}

const store = createStore(reducers);

store.dispatch(closeForm());
console.log(store.getState());

export default store;