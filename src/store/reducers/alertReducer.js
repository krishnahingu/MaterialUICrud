import { produce } from 'immer';
import { SET_ALERT, CLOSE_ALERT } from '../actions/actionTypes';

const initialState = {
  type: '',
  message: '',
};

const alertReducer = (draft, action) => {
  switch (action.type) {
    case SET_ALERT: {
      const { message, type } = action.payload;
      draft.message = message;
      draft.type = type;
      break;
    }
    case CLOSE_ALERT: {
      return initialState;
    }
    default:
      break;
  }
};

export default produce(alertReducer, initialState);
