import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router'
var App = React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about" className='nomal' activeClassName="active">About</Link></li>
          <li><Link to="/hello/jianzhong/123456" activeStyle={{ color: 'green' }}>hello</Link></li>
          <li><Link to="/login" activeStyle={{ color: 'yellow' }}>login</Link></li>
          <li><Link to="/navigation" activeStyle={{ color: 'blue' }}>home</Link></li>
        </ul>
      </div>
    );
  }
});

export default App;
// ReactDom.render(<App />, document.getElementById('app'));












