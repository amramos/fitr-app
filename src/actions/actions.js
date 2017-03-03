import * as actions from './actionTypes';

export function requestLogin(email, password){
  return {
    type: actions.REQUEST_LOGIN,
    email,
    password
  }
}

export function receiveLoginSuccess(id){
  return {
    type: actions.RECEIVE_LOGIN_SUCCESS,
    id
  }
}

export function receiveLoginError(){
  return {
    type: actions.RECEIVE_LOGIN_ERROR
  }
}

export function updateLoginField(field, value){
  return {
    type: actions.UPDATE_LOGIN_FIELD,
    field,
    value
  }
}
