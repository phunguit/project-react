import { combineReducers } from 'redux';
import { isShowForm } from './isShowForm';
import { order } from './order';
import items from './items';
import { search } from './search';
import { itemToDelete } from './itemToDelete';

const reducers = combineReducers({
	isShowForm: isShowForm,
	sort: order,
	items,
	strSearch: search,
	idToDelete: itemToDelete
});

export default reducers;