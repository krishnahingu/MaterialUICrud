import { produce } from 'immer';
import { CLEAR_ERROR, SET_ERROR } from '../actions/actionTypes';

const initialState = {
  type: '',
  message: '',
};

const errorReducer = (draft, action) => {
  switch (action.type) {
    case SET_ERROR: {
      const { message, type } = action.payload;
      draft.message = message;
      draft.type = type;
      break;
    }
    case CLEAR_ERROR: {
      draft.message = '';
      draft.type = '';
      break;
    }
    default:
      break;
  }
};

export default produce(errorReducer, initialState);
