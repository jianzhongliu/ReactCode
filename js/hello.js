import React from 'react';
import App from './app'

var Hello = React.createClass({

  render() {
    return(<div>
    	<App/>
    	<h1> Hello World!  </h1>
    	<h2>{this.props.params["userName"]}</h2> 
    	<h1>your passwd is </h1>
    	<h3>{this.props.params.userPasswd}</h3>
    	</div>);
  }
});

export default Hello;
