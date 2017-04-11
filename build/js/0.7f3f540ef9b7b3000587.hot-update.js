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

	var _Button = __webpack_require__(1036);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(292);
	__webpack_require__(1034);

	var Login = _react2.default.createClass({
			displayName: 'Login',

			render: function render() {
					var _this = this;

					return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'login-title' }, _react2.default.createElement('h2', null, '\u7528\u6237\u767B\u5F55'), _react2.default.createElement('h6', null, '\u8FD8\u6CA1\u6709\u94FE\u5BB6\u8D26\u53F7\uFF1F', _react2.default.createElement('a', { href: '', style: { color: 'red' } }, '\u9A6C\u4E0A\u6CE8\u518C'))), _react2.default.createElement('div', { className: 'login-input' }, _react2.default.createElement(_input2.default, {
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
					}), _react2.default.createElement(_Button2.default, { type: 'primary' }, 'Primary')));
			}
	});

	exports.default = Login;

/***/ },

/***/ 1036:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(1037);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(1038);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_button2["default"].Group = _buttonGroup2["default"];
	exports["default"] = _button2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 1037:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(243);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(281);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(296);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(297);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(333);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(285);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDom = __webpack_require__(161);

	var _icon = __webpack_require__(346);

	var _icon2 = _interopRequireDefault(_icon);

	var _omit = __webpack_require__(343);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
	var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
	function isString(str) {
	    return typeof str === 'string';
	}
	// Insert one space between two chinese characters automatically.
	function insertSpace(child) {
	    // Check the child if is undefined or null.
	    if (child == null) {
	        return;
	    }
	    if (isString(child.type) && isTwoCNChar(child.props.children)) {
	        return _react2["default"].cloneElement(child, {}, child.props.children.split('').join(' '));
	    }
	    if (isString(child)) {
	        if (isTwoCNChar(child)) {
	            child = child.split('').join(' ');
	        }
	        return _react2["default"].createElement(
	            'span',
	            null,
	            child
	        );
	    }
	    return child;
	}

	var Button = function (_React$Component) {
	    (0, _inherits3["default"])(Button, _React$Component);

	    function Button(props) {
	        (0, _classCallCheck3["default"])(this, Button);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.handleClick = function (e) {
	            // Add click effect
	            _this.setState({ clicked: true });
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function () {
	                return _this.setState({ clicked: false });
	            }, 500);
	            var onClick = _this.props.onClick;
	            if (onClick) {
	                onClick(e);
	            }
	        };
	        // Handle auto focus when click button in Chrome
	        _this.handleMouseUp = function (e) {
	            (0, _reactDom.findDOMNode)(_this).blur();
	            if (_this.props.onMouseUp) {
	                _this.props.onMouseUp(e);
	            }
	        };
	        _this.state = {
	            loading: props.loading
	        };
	        return _this;
	    }

	    Button.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this2 = this;

	        var currentLoading = this.props.loading;
	        var loading = nextProps.loading;
	        if (currentLoading) {
	            clearTimeout(this.delayTimeout);
	        }
	        if (loading) {
	            this.delayTimeout = setTimeout(function () {
	                return _this2.setState({ loading: loading });
	            }, 200);
	        } else {
	            this.setState({ loading: loading });
	        }
	    };

	    Button.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	        if (this.delayTimeout) {
	            clearTimeout(this.delayTimeout);
	        }
	    };

	    Button.prototype.render = function render() {
	        var _classNames;

	        var _a = this.props,
	            type = _a.type,
	            shape = _a.shape,
	            _a$size = _a.size,
	            size = _a$size === undefined ? '' : _a$size,
	            className = _a.className,
	            htmlType = _a.htmlType,
	            children = _a.children,
	            icon = _a.icon,
	            prefixCls = _a.prefixCls,
	            ghost = _a.ghost,
	            others = __rest(_a, ["type", "shape", "size", "className", "htmlType", "children", "icon", "prefixCls", "ghost"]);var _state = this.state,
	            loading = _state.loading,
	            clicked = _state.clicked;
	        // large => lg
	        // small => sm

	        var sizeCls = {
	            large: 'lg',
	            small: 'sm'
	        }[size] || '';
	        var classes = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3["default"])(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3["default"])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3["default"])(_classNames, prefixCls + '-clicked', clicked), (0, _defineProperty3["default"])(_classNames, prefixCls + '-background-ghost', ghost), _classNames), className);
	        var iconType = loading ? 'loading' : icon;
	        var iconNode = iconType ? _react2["default"].createElement(_icon2["default"], { type: iconType }) : null;
	        var kids = _react2["default"].Children.map(children, insertSpace);
	        return _react2["default"].createElement(
	            'button',
	            (0, _extends3["default"])({}, (0, _omit2["default"])(others, ['loading', 'clicked']), { type: htmlType || 'button', className: classes, onMouseUp: this.handleMouseUp, onClick: this.handleClick }),
	            iconNode,
	            kids
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	exports["default"] = Button;

	Button.__ANT_BUTTON = true;
	Button.defaultProps = {
	    prefixCls: 'ant-btn',
	    loading: false,
	    clicked: false,
	    ghost: false
	};
	Button.propTypes = {
	    type: _react2["default"].PropTypes.string,
	    shape: _react2["default"].PropTypes.oneOf(['circle', 'circle-outline']),
	    size: _react2["default"].PropTypes.oneOf(['large', 'default', 'small']),
	    htmlType: _react2["default"].PropTypes.oneOf(['submit', 'button', 'reset']),
	    onClick: _react2["default"].PropTypes.func,
	    loading: _react2["default"].PropTypes.bool,
	    className: _react2["default"].PropTypes.string,
	    icon: _react2["default"].PropTypes.string
	};
	module.exports = exports['default'];

/***/ },

/***/ 1038:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(243);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(281);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports["default"] = ButtonGroup;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(285);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	function ButtonGroup(props) {
	    var _props$prefixCls = props.prefixCls,
	        prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
	        _props$size = props.size,
	        size = _props$size === undefined ? '' : _props$size,
	        className = props.className,
	        others = __rest(props, ["prefixCls", "size", "className"]);
	    // large => lg
	    // small => sm


	    var sizeCls = {
	        large: 'lg',
	        small: 'sm'
	    }[size] || '';
	    var classes = (0, _classnames2["default"])(prefixCls, (0, _defineProperty3["default"])({}, prefixCls + '-' + sizeCls, sizeCls), className);
	    return _react2["default"].createElement('div', (0, _extends3["default"])({}, others, { className: classes }));
	}
	module.exports = exports['default'];

/***/ }

})