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

	var _input = __webpack_require__(294);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(346);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(444);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(292);
	__webpack_require__(1034);
	__webpack_require__(1039);

	var Login = _react2.default.createClass({
			displayName: 'Login',

			render: function render() {
					var _this = this;

					return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'login-title' }, _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', null, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C'))), _react2.default.createElement('div', { className: 'login-input' }, _react2.default.createElement(_input2.default, { className: 'form-item',
							placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
							prefix: _react2.default.createElement('i', { className: 'iconfont icon-xiaogougou' }, '\uE600'),
							onChange: this.onChangeUserName,
							ref: function ref(node) {
									return _this.userNameInput = node;
							}
					}), _react2.default.createElement(_input2.default, {
							placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
							prefix: _react2.default.createElement('i', { className: 'iconfont icon-xiaogougou' }, '\uE600'),
							onChange: this.onChangeUserName,
							ref: function ref(node) {
									return _this.userNameInput = node;
							}
					}), _react2.default.createElement(_button2.default, { type: 'primary' }, 'Primary')));
			}
	});

	exports.default = Login;

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(163);

	var _App2 = _interopRequireDefault(_App);

	var _input = __webpack_require__(294);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(346);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(444);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(292);
	__webpack_require__(1034);
	__webpack_require__(1039);

	var Login = _react2.default.createClass({
			displayName: 'Login',

			render: function render() {
					var _this = this;

					return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'login-title' }, _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', null, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C'))), _react2.default.createElement('div', { className: 'login-input' }, _react2.default.createElement(_input2.default, { className: 'form-item',
							placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
							prefix: _react2.default.createElement('i', { className: 'iconfont icon-xiaogougou' }, '\uE600'),
							onChange: this.onChangeUserName,
							ref: function ref(node) {
									return _this.userNameInput = node;
							}
					}), _react2.default.createElement(_input2.default, {
							placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
							prefix: _react2.default.createElement('i', { className: 'iconfont icon-xiaogougou' }, '\uE600'),
							onChange: this.onChangeUserName,
							ref: function ref(node) {
									return _this.userNameInput = node;
							}
					}), _react2.default.createElement(_button2.default, { type: 'primary' }, 'Primary')));
			}
	});

	exports.default = Login;

/***/ }

})