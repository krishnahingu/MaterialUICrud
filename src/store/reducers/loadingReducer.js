import { produce } from 'immer';
import { SET_LOADING } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

const loadingReducer = (draft, action) => {
  if (action.type === SET_LOADING) {
    draft.isLoading = !draft.isLoading;
  }
};

export default produce(loadingReducer, initialState);
