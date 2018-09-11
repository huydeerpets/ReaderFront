import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// App Imports
import { intlReducer } from 'react-intl-redux';
import releases from '../modules/releases/reducers';
import works from '../modules/works/reducers';
import work from '../modules/work/reducers';
import reader from '../modules/reader/reducers';
import blog from '../modules/blog/reducers';
import layout from '../modules/layout/reducers';
import user from '../modules/user/reducers/applyUser';

// App Reducer
const appReducer = combineReducers({
  releases,
  works,
  work,
  reader,
  blog,
  layout,
  user,
  intl: intlReducer
});

// Root Reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

// Load initial state from server side
let initialState;
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__;
  delete window.__INITIAL_STATE__;
}

// Store
export const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(applyMiddleware(thunk))
);
