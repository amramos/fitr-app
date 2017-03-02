import * as actions from '../actions/actionTypes';

const initialState = {
  isLogging: false
}

export default function(state = initialState, action){
  switch(action.type) {
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
