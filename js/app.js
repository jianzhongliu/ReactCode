import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router'
var App = React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hello">hello</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/navigation">home</Link></li>
        </ul>
      </div>
    );
  }
});

export default App;
// ReactDom.render(<App />, document.getElementById('app'));

