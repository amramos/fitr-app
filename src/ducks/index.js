import { combineReducers } from 'redux'
import login from './login'
import nav from './navigator'
import auth from './auth'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  login,
  nav,
  form: formReducer
});

