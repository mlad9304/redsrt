import { createAction, handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'

// ------------------------------------
// Actions
// ------------------------------------

export const logIn = createAction(LOGIN)

const token = localStorage.getItem('token')

const initialState = {
  token,
  status: 'INIT',
  error: null,
}
// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(
  {
    [requestSuccess(LOGIN)]: (state, { payload }) => ({
      ...state,
      token: payload,
      status: requestSuccess(LOGIN),
    }),

    [requestFail(LOGIN)]: (state, { payload }) => ({
      ...state,
      token: null,
      status: requestFail(LOGIN),
      error: payload,
    }),
  },
  initialState
)
