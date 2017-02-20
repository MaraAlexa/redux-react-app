import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'; // import all your action Creators

import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// the comp App connects the state(which are the posts and the comments) with the actionCreators
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// make it available to others that have imported it
export default App;
