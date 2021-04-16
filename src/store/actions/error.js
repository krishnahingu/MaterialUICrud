import { SET_ERROR, CLEAR_ERROR } from './actionTypes';

export const setError = ({ type, message }) => ({
    type: SET_ERROR,
    payload: { type, message },
  });

export const clearError = () => ({ type: CLEAR_ERROR });
