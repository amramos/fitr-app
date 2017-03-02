import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_LOGIN } from '../actions/actionTypes'
import { requestLogin, receiveLoginSuccess, receiveLoginError } from '../actions/actions'; 

export function* login(action){
  try {
    //const data = yield call(fetch, `/clients/${action.clientId}/documents`)

    yield put(receiveLoginSuccess(action));
  } catch (error){
    yield put(receiveLoginError(error))
  }
}

export default function* documentsSaga() {
  yield [
    takeEvery(REQUEST_LOGIN, login)
  ]
}
