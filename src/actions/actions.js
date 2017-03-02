import * as actions from './actionTypes';

export function requestLogin(){
  return {
    type: actions.REQUEST_LOGIN
  }
}

export function receiveLoginSuccess(){
  return {
    type: actions.RECEIVE_LOGIN_SUCCESS
  }
}

export function receiveLoginError(){
  return {
    type: actions.RECEIVE_LOGIN_ERROR
  }
}
