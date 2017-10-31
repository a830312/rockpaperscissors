'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/angora/rockpaperscissors/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this._handleTypeBtnClicked = _this._handleTypeBtnClicked.bind(_this);
    _this.state = {
      type: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: '_handleTypeBtnClicked',
    value: function _handleTypeBtnClicked(e) {
      var type = e.target.value;
      type = parseInt(type, 10);
      this.setState({ type: type });
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.state.type;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Rock\u2013paper\u2013scissors'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('button', { value: 0, onClick: this._handleTypeBtnClicked, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'simulate a game (Computer vs Computer)')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('button', { value: 1, onClick: this._handleTypeBtnClicked, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'play against the computer'))), _react2.default.createElement(_game2.default, { type: type, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR2FtZSIsIkluZGV4IiwicHJvcHMiLCJfaGFuZGxlVHlwZUJ0bkNsaWNrZWQiLCJiaW5kIiwic3RhdGUiLCJ0eXBlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFyc2VJbnQiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLHdCQUF3QixNQUFBLEFBQUssc0JBQUwsQUFBMkIsS0FBeEQsQUFDQTtVQUFBLEFBQUs7WUFIWSxBQUdqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7OzBDLEFBRXFCLEdBQUcsQUFDdkI7VUFBSSxPQUFPLEVBQUEsQUFBRSxPQUFiLEFBQW9CLEFBQ3BCO2FBQU8sU0FBQSxBQUFTLE1BQWhCLEFBQU8sQUFBZSxBQUN0QjtXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFDZjs7Ozs2QkFFUTtVQUFBLEFBQ0QsT0FBUyxLQURSLEFBQ2EsTUFEYixBQUNELEFBQ047OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtEQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxPQUFSLEFBQWUsR0FBRyxTQUFTLEtBQTNCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBSUYsNERBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLE9BQVIsQUFBZSxHQUFHLFNBQVMsS0FBM0IsQUFBZ0M7b0JBQWhDO3NCQUFBO0FBQUE7U0FUTixBQUVFLEFBTUUsQUFDRSxBQUtKLGdEQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFZO29CQUFaO3NCQWZKLEFBQ0UsQUFjRSxBQUdMO0FBSEs7Ozs7OztBQWhDWSxBLEFBc0NwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5nb3JhL3JvY2twYXBlcnNjaXNzb3JzIn0=