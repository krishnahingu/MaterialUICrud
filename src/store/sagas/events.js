/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';

import { getUsers ,getCreatedUser} from '../../api';
import { setLoading } from '../actions/loading';
import { clearError,setError } from '../actions/error';
import { fetchUserDetailsSuccess } from '../actions/events';

export function* getUserDetails(action) {
  
  yield put(setLoading());
  yield put(clearError());

  try {
    const response = yield  getUsers();
    const data = response.data.data
    yield put(fetchUserDetailsSuccess(data));
    yield put(setLoading());
  } catch (e) {
    yield put(setError({type:'user',message:"Error while fetching user details"}));
  }
}


export function* addUserDetails(action) {
  
  yield put(setLoading());
  yield put(clearError());

  try {
    const response = yield (getCreatedUser(action.payload));
    const data = response.data;
    let users = yield select((state) => state.events.users);
    yield put(fetchUserDetailsSuccess([...users,data]));
    yield put(setLoading());
  } catch (e) {
    yield put(setError({type:'user',message:"Error while fetching user details"}));
  }
}

