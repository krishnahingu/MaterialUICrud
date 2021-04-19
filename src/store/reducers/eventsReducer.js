import { produce } from 'immer';
import {
  USER_DETAILS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  users: []
};

const eventsReducer = (draft, action) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS: {
      action.payload.sort((a, b) => {
        const fa = a?.first_name.toLowerCase();
            const fb = b?.first_name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
      draft.users = action.payload;
      break;
    }
    default:
      break;
  }
};

export default produce(eventsReducer, initialState);
