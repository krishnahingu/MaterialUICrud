import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import modalReducer from './modalReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
    events: eventsReducer,
    error: errorReducer,
    loading: loadingReducer,
    modal: modalReducer,
    alert: alertReducer,
});

export default rootReducer;
