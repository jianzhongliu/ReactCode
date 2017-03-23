import React from 'react';
import ReactDom from 'react-dom';

import Hello from './hello';

var App = React.createClass({
  render() {
    return (
      <div className="nav">
        <p>123</p>
        <Hello />
      </div>
    );
  }
});

ReactDom.render(<App />, document.getElementById('app'));

