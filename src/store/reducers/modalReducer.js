import { produce } from 'immer';
import { TOGGLE_MODAL, SHOW_MODAL, CLOSE_MODAL } from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  type: '',
};

const modalReducer = (draft, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      draft.isOpen = !draft.isOpen;
      break;
    }
    case SHOW_MODAL: {
      draft.isOpen = true;
      draft.type = action.payload;
      break;
    }
    case CLOSE_MODAL: {
      return initialState;
    }
    default: break;
  }
};

export default produce(modalReducer, initialState);
