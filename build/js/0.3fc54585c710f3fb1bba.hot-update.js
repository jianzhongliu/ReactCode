webpackHotUpdate(0,{

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(360);
	var DetailVeiw = _react2.default.createClass({
	    displayName: 'DetailVeiw',

	    setTitle: function setTitle(title) {
	        document.title = title;
	    },
	    tongji: function tongji() {
	        var _hmt = _hmt || [];
	        (function () {
	            var hm = document.createElement("script");
	            hm.src = "https://hm.baidu.com/hm.js?a08c311f6f602dc863400892a8ffcc15";
	            var s = document.getElementsByTagName("script")[0];
	            s.parentNode.insertBefore(hm, s);
	        })();
	    },
	    render: function render() {
	        this.tongji();
	        return _react2.default.createElement('div', { className: 'detail-content' }, _react2.default.createElement('div', { className: 'img-block' }, _react2.default.createElement('div', { className: 'img-border' }, _react2.default.createElement('p', null, '5\u6B21\u5E26\u770B'))));
	    }

	});

	exports.default = DetailVeiw;

/***/ }

})