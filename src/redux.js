import { createStore } from 'redux';
import { AcCloseForm, AcOrder } from './actions/index';

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

		case 'ORDER':
			state.orderBy = action.orderBy;
			state.orderDir = action.orderDir;
			return state;
			
		default:
			return state;
	}
}

const store = createStore(reducers);

store.dispatch(AcCloseForm());
console.log(store.getState());

store.dispatch(AcOrder('level', 'asc'));
console.log(store.getState());

export default store;