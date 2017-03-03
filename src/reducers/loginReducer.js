import * as actions from '../actions/actionTypes';
import { Alert } from 'react-native';

const initialState = {
  email: '',
  password: '',
  isLogging: false
}

export default function(state = initialState, action){
  switch(action.type) {
    case actions.UPDATE_LOGIN_FIELD: 
      return {
        ...state,
        [action.field]: action.value
      }
    case actions.REQUEST_LOGIN:
      return {
        isLogging: true
      };
    case actions.RECEIVE_LOGIN_ERROR:
    case actions.RECEIVE_LOGIN_SUCCESS:
      return {
        isLogging: false
      };
    default:
      return state;
  }
}
