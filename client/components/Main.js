// this component holds all the data needed (actions, reducers, routes)
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to ="/">Redux-stagram</Link>
          {/*pass all the parent props down to PhotoGrid or the Single component depending on the routing*/}
          {React.cloneElement(this.props.children, this.props)}
        </h1>
      </div>
    )
  }
});

export default Main;
