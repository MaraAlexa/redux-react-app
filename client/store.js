import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts: posts,
  comment: comments
};

// make the store
const store = createStore(rootReducer, defaultState);

// the history of the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
