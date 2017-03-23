
import React from 'react';
import ReactDom from 'react-dom';
import About from './js/About'
import Login from './js/login'
import { Router, Route, hashHistory } from 'react-router'

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));