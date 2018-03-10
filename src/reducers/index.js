import { combineReducers } from 'redux';
import { isShowForm } from './isShowForm';
import { order } from './order';
import items from './items';

const reducers = combineReducers({
	isShowForm: isShowForm,
	sort: order,
	items
});

export default reducers;