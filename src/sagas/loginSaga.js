import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_LOGIN } from '../actions/actionTypes'
import { requestLogin, receiveLoginSuccess, receiveLoginError } from '../actions/actions'; 
import { post } from '../Api';

export function* login(action){
  try {
    
    const data = yield call(post, `/user/login/`, {
      username: action.email,
      password: action.password
    });

    yield put(receiveLoginSuccess(data.id));
  } catch (error){
    yield put(receiveLoginError(error))
  }
}

export default function* documentsSaga() {
  yield [
    takeEvery(REQUEST_LOGIN, login)
  ]
}
