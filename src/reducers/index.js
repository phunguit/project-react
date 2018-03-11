import { combineReducers } from 'redux';
import { isShowForm } from './isShowForm';
import { order } from './order';
import items from './items';
import { search } from './search';

const reducers = combineReducers({
	isShowForm: isShowForm,
	sort: order,
	items,
	strSearch: search
});

export default reducers;