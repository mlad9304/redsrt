import { takeLatest } from 'redux-saga/effects'
import { LOGIN } from 'api/modules/auth'
import request from 'utils/request'

const doLogin = request({
  type: LOGIN,
  method: 'POST',
  url: 'login',
  success: (res, action) => {
    localStorage.setItem('token', JSON.stringify(res.data))
  },
})


export default function* rootSaga() {
  yield takeLatest(LOGIN, doLogin)
}
