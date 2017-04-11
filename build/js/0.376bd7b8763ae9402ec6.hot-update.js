webpackHotUpdate(0,{

/***/ 352:
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

	__webpack_require__(340);
	__webpack_require__(342);

	__webpack_require__(353);

	var Register = _react2.default.createClass({
		displayName: 'Register',

		render: function render() {
			return _react2.default.createElement('div', { style: { borderWidth: '1px', borderColor: '#d3d3d3', borderStyle: 'solid' } }, _react2.default.createElement('div', { className: 'register-phone' }, _react2.default.createElement(_button2.default, { style: { float: 'right', top: '5px', height: '30px', width: '100px', fontSize: '14px', fontColor: '#d6d6d6' }, type: 'primary' }, '\u53D1\u9001\u9A8C\u8BC1\u7801'), _react2.default.createElement(_input2.default, { style: { height: '40px', width: 'calc(100% - 120px)', padding: '0', borderColor: 'clear' },
				placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7',
				onChange: this.onChangeUserName })), _react2.default.createElement(_input2.default, { style: { height: '40px', width: 'calc(100% - 2px)', padding: '0' },
				placeholder: '\u8BF7\u8F93\u77ED\u4FE1\u9A8C\u8BC1\u7801',
				onChange: this.onChangeUserName }), _react2.default.createElement(_input2.default, { style: { height: '40px', width: 'calc(100% - 2px)', padding: '0' },
				placeholder: '\u6635\u79F0',
				onChange: this.onChangeUserName }), _react2.default.createElement(_input2.default, { style: { height: '40px', width: 'calc(100% - 2px)', padding: '0' },
				placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
				onChange: this.onChangeUserName }), _react2.default.createElement(_input2.default, { style: { height: '40px', width: 'calc(100% - 2px)', padding: '0' },
				placeholder: '\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801',
				onChange: this.onChangeUserName }), _react2.default.createElement(_button2.default, { style: { height: '40px', width: 'calc(100% - 20px)', margin: '10px', fontSize: '16px', fontColor: '#d6d6d6' }, type: 'primary' }, '\u6CE8\u518C'));
		}
	});

	exports.default = Register;

/***/ }

})