// Infuse the Main comp with the actionCreators and the data

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
// the comp App connects the state(of posts and comments)
// with the dispatch method(that passes down the actioncreators via props)
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// make it available to others that have imported it
export default App;
