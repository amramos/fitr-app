import {Actions} from 'react-native-router-flux'
import { http }from '../config/Api'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS'
export const RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR'

const initialState = {
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case REQUEST_LOGIN:
      //is logging
      return {
        ...state
      }
    case RECEIVE_LOGIN_ERROR:
      return {
        ...state
      }
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...state
      }
    default:
      return state
  }
}

export function requestLogin(email, password){
  return {
    type: REQUEST_LOGIN,
    email,
    password
  }
}

export function receiveLoginSuccess(id){
  return {
    type: RECEIVE_LOGIN_SUCCESS,
    id
  }
}

export function receiveLoginError(){
  return {
    type: RECEIVE_LOGIN_ERROR
  }
}

export function doRequestLogin(email, password){
  return dispatch => {
    dispatch(requestLogin(email, password))

    const loginData = {
      username:  email,
      password: password
    }

    return http('/user/login', 'POST', loginData)
      .then(json => {
        dispatch(receiveLoginSuccess(json.id))

        Actions.student();

        /*if(json.role === 'student'){
          Actions.student();
        } else if(json.role === 'instructor'){
          Actions.instructor();
        }*/

      })
      .catch(error => dispatch(receiveLoginError(error)))
  }
}
