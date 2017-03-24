import React from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router'

var Navigation = React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/hello/gange/321321" activeStyle={{ color: 'green' }}>hello</Link></li>
          <li><Link to="/login" activeStyle={{ color: 'yellow' }}>login</Link></li>
          <li><Link to="/navigation" activeStyle={{ color: 'blue' }}>home</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export default  Navigation;