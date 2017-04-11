webpackHotUpdate(0,{

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(163);

	var _App2 = _interopRequireDefault(_App);

	var _input = __webpack_require__(239);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(334);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(335);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(338);
	__webpack_require__(340);
	__webpack_require__(342);

	var Login = _react2.default.createClass({
	  displayName: 'Login',

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'login-title' }, _react2.default.createElement('h2', { className: 'login-login-title' }, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', { className: 'login-login-register' }, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C'))), _react2.default.createElement('div', { className: 'login-input' }, _react2.default.createElement(_input2.default, { style: { height: '30px', margin: '0 auto', width: '98%' },
	      placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
	      onChange: this.onChangeUserName }), _react2.default.createElement(_input2.default, { style: { height: '30px', width: '98%', marginTop: '10px' },
	      placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
	      onChange: this.onChangeUserName,
	      ref: function ref(node) {
	        return _this.userNameInput = node;
	      } })), _react2.default.createElement(_button2.default, { style: { height: '40px', width: '100%', marginTop: '10px' }, type: 'primary' }, 'Primary'));
	  }
	});

	exports.default = Login;

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(163);

	var _App2 = _interopRequireDefault(_App);

	var _input = __webpack_require__(239);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(334);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(335);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(338);
	__webpack_require__(340);
	__webpack_require__(342);

	var Login = _react2.default.createClass({
	  displayName: 'Login',

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'login-title' }, _react2.default.createElement('h2', { className: 'login-login-title' }, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', { className: 'login-login-register' }, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C'))), _react2.default.createElement('div', { className: 'login-input' }, _react2.default.createElement(_input2.default, { style: { height: '30px', margin: '0 auto', width: '98%' },
	      placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
	      onChange: this.onChangeUserName }), _react2.default.createElement(_input2.default, { style: { height: '30px', width: '98%', marginTop: '10px' },
	      placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
	      onChange: this.onChangeUserName,
	      ref: function ref(node) {
	        return _this.userNameInput = node;
	      } })), _react2.default.createElement(_button2.default, { style: { height: '40px', width: '100%', marginTop: '10px' }, type: 'primary' }, 'Primary'));
	  }
	});

	exports.default = Login;

/***/ }

})