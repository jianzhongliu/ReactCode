import React from 'react';
import App from './app'

var Hello = React.createClass({

  render() {
    return(<div><App/><h1>Hello World! <h2>{this.props.params["userName"]}</h2> your passwd is <h3>{this.props.params.userPasswd}</h3></h1></div>);
  }
});

export default Hello;
