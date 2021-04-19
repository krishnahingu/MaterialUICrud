import { all, takeEvery } from 'redux-saga/effects';
import { getUserDetails, addUserDetails } from './events';
import {
  USER_DETAILS, USER_DETAILS_ADD,
} from '../actions/actionTypes';

export default function* rootSaga() {
  yield all([watchEvents()]);
}

function* watchEvents() {
  yield takeEvery(USER_DETAILS, getUserDetails);
  yield takeEvery(USER_DETAILS_ADD, addUserDetails);
}
