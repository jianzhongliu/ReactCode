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

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(292);
	var Login = _react2.default.createClass({
	  displayName: 'Login',

	  render: function render() {
	    return _react2.default.createElement('div', null, _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', null, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C')));
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

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(292);
	var Login = _react2.default.createClass({
	  displayName: 'Login',

	  render: function render() {
	    return _react2.default.createElement('div', null, _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', null, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C')));
	  }
	});

	exports.default = Login;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(293);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(234)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(293, function() {
				var newContent = __webpack_require__(293);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(229)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }

})