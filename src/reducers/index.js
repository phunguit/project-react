import { combineReducers } from 'redux';
import { isShowForm } from './isShowForm';
import { order } from './order';


const reducers = combineReducers({
	isShowForm: isShowForm,
	sort: order
});

export default reducers;