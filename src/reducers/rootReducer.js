import { combineReducers } from 'redux';
import auth from './authReducer';
import login from './loginReducer';
import nav from './navReducer';

export default combineReducers({
  auth,
  login,
  nav
});
