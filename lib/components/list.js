"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _base = require("../utils/base");

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (0, _radium2.default)(_class = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        { className: this.props.className, style: [this.context.styles.components.list, _base.getStyles.call(this), this.props.style] },
        this.props.children
      );
    }
  }]);

  return List;
}(_react.Component)) || _class;

exports.default = List;


List.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string
};

List.contextTypes = {
  styles: _react.PropTypes.object
};