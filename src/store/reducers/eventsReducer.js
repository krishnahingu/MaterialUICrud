import { produce } from 'immer';
import {
  USER_DETAILS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  users:[]
};


const eventsReducer = (draft, action) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS: {
      draft.users = action.payload;
      break;
    }
    default:
      break;
  }
};

export default produce(eventsReducer, initialState);
