import { RECEIVE_LOGIN_SUCCESS } from './login'

const initialState = {
  user: ''
}


export default function reducer(state = initialState, action){
  switch(action.type) {
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.id
      }
    default:
      return state
  }
}
