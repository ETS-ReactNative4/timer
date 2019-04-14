import { combineReducers } from 'redux';
import timerNames from './reducers-timerNames';
import timerValues from './reducers-timerValues';

export default combineReducers({
  timerNames,
  timerValues
})