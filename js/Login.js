
import React from 'react';

import App from './App'

var Login = React.createClass({
 render:function (){
 	return (<div className='login-main'>
 		<App/>
 		<div className='flexDiv'>
			<div className="first-face">
			  <span className="pip"></span>
			</div>
			<div className="second-face">
			  <span className="pip"></span>
			  <span className="pip"></span>
			</div>
			<div className="third-face">
			  <span className="pip"></span>
			  <span className="pip"></span>
			  <span className="pip"></span>
			</div>
			<div className="fourth-face">
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			</div>
			<div className="fifth-face">
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			  <div className="column">
			    <span className="pip"></span>
			  </div>
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			</div>
			<div className="sixth-face">
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			  <div className="column">
			    <span className="pip"></span>
			    <span className="pip"></span>
			    <span className="pip"></span>
			  </div>
			</div>
			</div>
 		</div>);
 }
});

export default Login;