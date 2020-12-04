import orderbookReducer from './orderbook';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    orderbook: orderbookReducer
});

export default rootReducer;