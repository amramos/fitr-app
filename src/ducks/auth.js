import { RECEIVE_LOGIN_SUCCESS } from './login'

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
    default:
      return state
  }
}
