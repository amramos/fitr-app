import { RECEIVE_LOGIN_SUCCESS } from './login'
import { RECEIVE_CHECK_IN_SUCCESS } from './student'

const initialState = {
  role: '',
  id: '',
  user: {
  }
}


export default function reducer(state = initialState, action){
  switch(action.type) {
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...state,
        id: action.id,
        role: action.role,
        user: action.data
      }
    case RECEIVE_CHECK_IN_SUCCESS:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
