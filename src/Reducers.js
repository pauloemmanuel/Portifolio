import pageReducer from './reducers/pageReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  page:pageReducer
});