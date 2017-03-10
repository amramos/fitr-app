const REQUEST_LOGIN = 'REQUEST_LOGIN';
const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS';
const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR';

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
