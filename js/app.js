import React from 'react';
import ReactDom from 'react-dom';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <p>123</p>
      </div>
    );
  }
});

ReactDom.render(<App />, document.getElementById('react'));

