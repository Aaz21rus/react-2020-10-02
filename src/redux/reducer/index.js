import { combineReducers } from 'redux';
import orderReducer from './order';
import order2Reducer from './order2';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  order2: order2Reducer,
});

export default reducer;
