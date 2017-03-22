import {Alert} from 'react-native'
import { http } from '../config/Api'


export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const RECEIVE_REGISTER_SUCCESS= 'RECEIVE_REGISTER_SUCCESS'
export const RECEIVE_REGISTER_ERROR = 'RECEIVE_REGISTER_ERROR'

const initialState = {
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case REQUEST_REGISTER:
      //is logging
      return {
        ...state
      }
    case RECEIVE_REGISTER_ERROR:
      return {
        ...state
      }
    case RECEIVE_REGISTER_SUCCESS:
      return {
        ...state
      }
    default:
      return state
  }
}

export function requestRegister(email, password){
  return {
    type: REQUEST_REGISTER,
    email,
    password
  }
}

export function receiveRegisterSuccess(id){
  return {
    type: RECEIVE_REGISTER_SUCCESS,
    id
  }
}

export function receiveRegisterError(){
  return {
    type: RECEIVE_REGISTER_ERROR
  }
}

export function doRequestRegister(email, password){
  return dispatch => {
    dispatch(requestRegister(email, password))

    const registerData = {
      username:  email,
      password: password
    }

    return http('/user/register', 'POST', registerData)
      .then(json => {
        Alert.alert('Success')
        dispatch(receiveRegisterSuccess(json.id))
      })
      .catch(error => dispatch(receiveRegister(error)))
  }
}
