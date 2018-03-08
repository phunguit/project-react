import { createStore } from 'redux';
import { AcCloseForm, AcOrder } from './actions/index';
import reducers from './reducers/index'


const store = createStore(reducers);

store.dispatch(AcCloseForm());
console.log(store.getState());

store.dispatch(AcOrder('level', 'asc'));
console.log(store.getState());

export default store;