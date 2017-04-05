import { http }from '../config/Api'

export const REQUEST_CHECK_IN = 'REQUEST_CHECK_IN'
export const RECEIVE_CHECK_IN_SUCCESS = 'RECEIVE_CHECK_IN_SUCCESS'
export const RECEIVE_CHECK_IN_ERROR = 'RECEIVE_CHECK_IN_ERROR'

const initialState = {
  isDoingCheckin: false
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case REQUEST_CHECK_IN:
      //is logging
      return {
        ...state,
        isDoingCheckin: true
      }
    case RECEIVE_CHECK_IN_SUCCESS:
      return {
        ...state,
        isDoingCheckin: false
      }
    case RECEIVE_CHECK_IN_ERROR:
      return {
        ...state,
        isDoingCheckin: false
      }
    default:
      return state
  }
}

export function requestCheckin(userId){
  return {
    type: REQUEST_CHECK_IN,
    userId
  }
}

export function receiveCheckinSuccess(userId, user){
  return {
    type: RECEIVE_CHECK_IN_SUCCESS,
    userId,
    user
  }
}

export function receiveCheckinError(error){
  return {
    type: RECEIVE_LOGIN_ERROR,
    error
  }
}

export function doCheckin(userId){
  return dispatch => {
    dispatch(requestCheckin(userId))

    return http(`/student/${userId}/checkin`, 'POST')
      .then(json => {
        dispatch(receiveCheckinSuccess(userId, json.user))
      })
      .catch(error => dispatch(receiveCheckinError(error)))
  }
}
