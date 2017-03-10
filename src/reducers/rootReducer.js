import { combineReducers } from 'redux';
import auth from './authReducer';
import login from './loginReducer';
import nav from './navReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  login,
  nav,
  form: formReducer
});
