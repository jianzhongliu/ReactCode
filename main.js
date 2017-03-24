
import React from 'react';
import ReactDom from 'react-dom';
import About from './js/About'
import Login from './js/Login'
import Hello from './js/Hello'
import App from './js/app'
import Navigation from './js/Navigation'
import { Router, Route, hashHistory } from 'react-router'

ReactDom.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route path='/hello/:userName/:userPasswd' component={Hello}/>
    <route path="/navigation" component = {Navigation}/>
  </Router>
), document.getElementById('app'));