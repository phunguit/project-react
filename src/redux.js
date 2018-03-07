import { createStore } from 'redux';

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
		case 'TEST':
			console.log('TEST', state);
			break;

		default:
			return state;
	}
}

const store = createStore(reducers);

console.log(store.getState());

export default store;