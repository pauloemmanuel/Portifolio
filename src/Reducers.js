import userReducer from './reducers/userReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  user:userReducer
});