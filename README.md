
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project details 

In this project we use below list of feature 

1) React js
2) React hook
3) Redux
4) Redux-saga
5) Immer (for immutablility object)
6) React focus lock  ( use to tab navigation )
7) axios (use to API call) 
8) Router (Page navigation)

In this project we create table for customer group. Using this table  user can udpate , delete ,add customer group and name.

For statemenagment we are using redux + redux saga as middleware .

Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations. These operations are also known as side effects. Redux Saga helps to organize these side effects in a way that is easier to manage.

# Redux-Saga setup

```
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

```

# Watchers and Workers
The main saga file is usually split into two different types of sagas: Watchers and workers
Watcher saga sees every action that is dispatched to the redux store; if it matches the action it is told to handle, it will assign it to its worker saga
The worker saga is running all the side effects it was meant to do
The watcher saga is typically the root saga to export and mount on the store

# Simple saga example
```

export default function* rootSaga() {
  yield all([watchEvents()]);
}

function* watchEvents() {
  yield takeEvery(USER_DETAILS, getUserDetails);
  yield takeEvery(USER_DETAILS_ADD, addUserDetails);

  
}

export function* getUserDetails(action) {
  
  yield put(setLoading());
  yield put(clearError());

  try {
    const response = yield  getUsers();
    const data = response.data.data
    yield put(fetchUserDetailsSuccess(data));
    yield put(setLoading());
  } catch (e) {
    yield put(setError({type:'user',message:"Error while fetching user details"}));
  }
}

```

# Action 

```
export const fetchUserDetailsInit = () => ({ type: USER_DETAILS });

export const fetchUserDetailsSuccess = (data) => ({ type: USER_DETAILS_SUCCESS, payload: data });

export const addUsers = (data) => ({ type: USER_DETAILS_ADD, payload: data });

```

# Reducer

```

const eventsReducer = (draft, action) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS: {
      action.payload.sort((a, b) => {
        let fa = a.first_name.toLowerCase(),
            fb = b.first_name.toLowerCase();
    
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


```


# Pros:
More readable code (async/await)
Good for handling complex scenarios (multiple conditional calls in one action, action can have multiple listeners, canceling actions, etc.)
Easy to unit test
# Cons:
A lot of code in different places
After navigation to another page, old data is still in the global state. This data is outdated and useless information that consumes memory.
Additional dependency
A lot of concepts to learn



## Prerequisites

- [Node.js and NPM](https://nodejs.org/en/download/)
  - Minimum Node.js version required for this project: `^10.13.0 || >=12.0.0`
  - It is recommended to install NVM to handle multiple versions of Node.js on your device:

  ```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```

  ```bash
  nvm install 12
  ```

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Next, retrieve the needed ENV files for running the project from a team member:

```bash
1. .env
2. .env.development
3. .env.staging
4. .env.production
```

## Running The Project

```bash
npm run start
```
