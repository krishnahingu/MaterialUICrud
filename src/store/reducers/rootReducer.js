import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
