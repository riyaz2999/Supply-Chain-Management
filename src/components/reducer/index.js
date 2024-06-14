import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    AuthReducer: AuthReducer,
    NavReducer: NavReducer
});
//By default it will be a root reducer