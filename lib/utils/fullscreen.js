"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fscreen = _interopRequireDefault(require("fscreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FullScreen = /*#__PURE__*/function (_Component) {
  _inherits(FullScreen, _Component);

  var _super = _createSuper(FullScreen);

  function FullScreen(props) {
    var _this;

    _classCallCheck(this, FullScreen);

    _this = _super.call(this, props);
    _this.detectFullScreen = _this.detectFullScreen.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FullScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _fscreen.default.addEventListener("fullscreenchange", this.detectFullScreen);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _fscreen.default.removeEventListener("fullscreenchange", this.detectFullScreen);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleProps(this.props);
    }
  }, {
    key: "handleProps",
    value: function handleProps(props) {
      var enabled = _fscreen.default.fullscreenElement === this.node;

      if (enabled && !props.enabled) {
        this.leaveFullScreen();
      } else if (!enabled && props.enabled) {
        this.enterFullScreen();
      }
    }
  }, {
    key: "detectFullScreen",
    value: function detectFullScreen() {
      if (this.props.onChange) {
        this.props.onChange(_fscreen.default.fullscreenElement === this.node);
      }
    }
  }, {
    key: "enterFullScreen",
    value: function enterFullScreen() {
      if (_fscreen.default.fullscreenEnabled) {
        _fscreen.default.requestFullscreen(this.node);
      }
    }
  }, {
    key: "leaveFullScreen",
    value: function leaveFullScreen() {
      if (_fscreen.default.fullscreenEnabled) {
        _fscreen.default.exitFullscreen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = ["fullscreen"];

      if (this.props.enabled) {
        className.push("fullscreen-enabled");
      }

      console.log('fullscreen', this.props.enabled);
      return /*#__PURE__*/_react.default.createElement("div", {
        //className={className.join(" ")}
        ref: function ref(node) {
          return _this2.node = node;
        },
        style: this.props.enabled ? {
          height: "100%",
          width: "100%"
        } : undefined
      }, this.props.children);
    }
  }]);

  return FullScreen;
}(_react.Component);

_defineProperty(FullScreen, "propTypes", {
  children: _propTypes.default.node.isRequired,
  enabled: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func
});

_defineProperty(FullScreen, "defaultProps", {
  enabled: false
});

var _default = FullScreen;
exports.default = _default;