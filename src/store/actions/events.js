import {
  USER_DETAILS,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ADD
} from './actionTypes';

export const fetchUserDetailsInit = () => ({ type: USER_DETAILS });

export const fetchUserDetailsSuccess = (data) => ({ type: USER_DETAILS_SUCCESS, payload: data });

export const addUsers = (data) => ({ type: USER_DETAILS_ADD, payload: data });
