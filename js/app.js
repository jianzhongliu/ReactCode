import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router'
var App = React.createClass({
  render() {
    return (
      <div>
        <h1>中国链家</h1>
        <ul role="nav">
          <li><Link to="/about" className='nomal' activeClassName="active">About</Link></li>
          <li><Link to="/hello/jianzhong/123456" activeStyle={{ color: 'green' }}>hello</Link></li>
          <li><Link to="/login" activeStyle={{ color: 'yellow' }}>login</Link></li>
          <li><Link to="/navigation" activeStyle={{ color: 'blue' }}>home</Link></li>
          <li><Link to='/property' activeStyle={{ color: 'blue' }}>property</Link></li>
          <li><Link to='/detailView' activeStyle={{ color: 'blue' }}>detailView</Link></li>
        </ul>
      </div>
    );
  }
});

export default App;
// ReactDom.render(<App />, document.getElementById('app'));












