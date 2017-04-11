webpackHotUpdate(0,{

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(161);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(164);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var App = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'React Router Tutorial'), _react2.default.createElement('ul', { role: 'nav' }, _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/about', className: 'nomal', activeClassName: 'active' }, 'About')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/hello/jianzhong/123456', activeStyle: { color: 'green' } }, 'hello')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/login', activeStyle: { color: 'yellow' } }, 'login')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/navigation', activeStyle: { color: 'blue' } }, 'home')), _react2.default.createElement('li', null)));
	  }
	});

	exports.default = App;
	// ReactDom.render(<App />, document.getElementById('app'));

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(161);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(164);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var App = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'React Router Tutorial'), _react2.default.createElement('ul', { role: 'nav' }, _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/about', className: 'nomal', activeClassName: 'active' }, 'About')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/hello/jianzhong/123456', activeStyle: { color: 'green' } }, 'hello')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/login', activeStyle: { color: 'yellow' } }, 'login')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/navigation', activeStyle: { color: 'blue' } }, 'home')), _react2.default.createElement('li', null)));
	  }
	});

	exports.default = App;
	// ReactDom.render(<App />, document.getElementById('app'));

/***/ }

})