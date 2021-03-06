"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.remarkConfigDefault = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _remark = require("remark");

var _remark2 = _interopRequireDefault(_remark);

var _remarkReact = require("remark-react");

var _remarkReact2 = _interopRequireDefault(_remarkReact);

var _lodash = require("lodash");

var _blockQuote = require("./block-quote");

var _blockQuote2 = _interopRequireDefault(_blockQuote);

var _codePane = require("./code-pane");

var _codePane2 = _interopRequireDefault(_codePane);

var _code = require("./code");

var _code2 = _interopRequireDefault(_code);

var _heading = require("./heading");

var _heading2 = _interopRequireDefault(_heading);

var _image = require("./image");

var _image2 = _interopRequireDefault(_image);

var _link = require("./link");

var _link2 = _interopRequireDefault(_link);

var _list = require("./list");

var _list2 = _interopRequireDefault(_list);

var _listItem = require("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var _quote = require("./quote");

var _quote2 = _interopRequireDefault(_quote);

var _s = require("./s");

var _s2 = _interopRequireDefault(_s);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// We can't pass props into remark-react directly, so we have to "bind" them
// to spectacle components (ex. headings, strong/em/del)
var spectacleComponent = function spectacleComponent(component) {
  var boundProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return _react2.default.createClass({
    propTypes: function propTypes() {
      return {
        children: _react.PropTypes.children
      };
    },
    render: function render() {
      var props = _extends({}, this.props, boundProps);
      return _react2.default.createElement(component, _extends({}, props), this.props.children);
    }
  });
};

// Spectacle requires a <Quote> inside a <BlockQuote>

var CombinedBlockQuote = function (_Component) {
  _inherits(CombinedBlockQuote, _Component);

  function CombinedBlockQuote() {
    _classCallCheck(this, CombinedBlockQuote);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CombinedBlockQuote).apply(this, arguments));
  }

  _createClass(CombinedBlockQuote, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _blockQuote2.default,
        null,
        _react2.default.createElement(
          _quote2.default,
          null,
          this.props.children
        )
      );
    }
  }]);

  return CombinedBlockQuote;
}(_react.Component);

CombinedBlockQuote.propTypes = {
  children: _react.PropTypes.object
};

// We export the default config so people can extend it themselves
var remarkConfigDefault = exports.remarkConfigDefault = {
  commonmark: true,
  paragraphBlockquotes: false,
  remarkReactComponents: {
    a: _link2.default,
    blockquote: CombinedBlockQuote,
    code: _codePane2.default,
    del: spectacleComponent(_s2.default, { type: "strikethrough" }),
    em: spectacleComponent(_s2.default, { type: "italic" }),
    h1: spectacleComponent(_heading2.default, { size: 1 }),
    h2: spectacleComponent(_heading2.default, { size: 2 }),
    h3: spectacleComponent(_heading2.default, { size: 3 }),
    h4: spectacleComponent(_heading2.default, { size: 4 }),
    h5: spectacleComponent(_heading2.default, { size: 5 }),
    h6: spectacleComponent(_heading2.default, { size: 6 }),
    img: _image2.default,
    inlineCode: _code2.default,
    li: _listItem2.default,
    p: _text2.default,
    strong: spectacleComponent(_s2.default, { type: "bold" }),
    ul: _list2.default
  }
};

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Markdown).apply(this, arguments));
  }

  _createClass(Markdown, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var source = _props.source;
      var children = _props.children;
      var remarkConfig = _props.remarkConfig;

      var content = (0, _lodash.isUndefined)(source) || source === "" ? children : source;

      return _react2.default.createElement(
        "div",
        { style: this.props.style },
        (0, _remark2.default)().use(_remarkReact2.default, remarkConfig).process(content)
      );
    }
  }]);

  return Markdown;
}(_react2.default.Component);

exports.default = Markdown;


Markdown.propTypes = {
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  source: _react.PropTypes.string,
  remarkConfig: _react.PropTypes.object
};

Markdown.defaultProps = {
  style: {},
  source: "",
  remarkConfig: remarkConfigDefault
};