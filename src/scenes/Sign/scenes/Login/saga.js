import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_LOGIN, receiveLoginSuccess, receiveLoginError } from './duck'
import { req } from '../../../../config/Api'

export function* login(action) {
  try {
    const data = yield call(req, '/user/login/', 'POST', {
      username: action.email,
      password: action.password,
    })

    yield put(receiveLoginSuccess(data.id))
  } catch (error) {
    yield put(receiveLoginError(error))
  }
}

export default function* documentsSaga() {
  yield [
    takeEvery(REQUEST_LOGIN, login),
  ]
}
