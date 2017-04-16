
import React from 'react';
import ReactDom from 'react-dom';
import About from './js/About'
import Login from './js/Login'
import Hello from './js/Hello'
import App from './js/app'
import Navigation from './js/Navigation'
import { Router, Route, hashHistory } from 'react-router'
import Property from './js/propertyList'
import DetailView from './js/detailView'

ReactDom.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route path='/hello/:userName/:userPasswd' component={Hello}/>
    <Route path="/navigation" component = {Navigation}/>
    <Route path="/property" component={Property}/>
    <Route path="/detailView" component={DetailView}/>
  </Router>
), document.getElementById('app'));