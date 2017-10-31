'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _helpers = require('./lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/angora/rockpaperscissors/pages/game.js';


var Game = function (_Component) {
  (0, _inherits3.default)(Game, _Component);

  function Game(props) {
    (0, _classCallCheck3.default)(this, Game);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, props));

    _this._handleWeaponClicked = _this._handleWeaponClicked.bind(_this);
    var type = props.type,
        configs = props.configs,
        weapons = configs.weapons,
        weapon1 = Math.floor(Math.random() * weapons.length) + 1,
        player1 = {
      type: 'npc',
      weapon: weapon1,
      weaponName: weapons[weapon1],
      result: ''
    },
        player2 = {
      type: '',
      weapon: '',
      weaponName: '',
      result: ''
    };

    _this.state = {
      player1: player1,
      player2: player2
    };
    return _this;
  }

  (0, _createClass3.default)(Game, [{
    key: '_handleWeaponClicked',
    value: function _handleWeaponClicked(e) {
      var _state = this.state,
          player1 = _state.player1,
          player2 = _state.player2,
          _props = this.props,
          configs = _props.configs,
          type = _props.type,
          results = configs.results,
          player1Weapon = player1.weapon,
          player2Weapon = e.target.value,
          player2WeaponName = configs.weapons[player2Weapon],
          caculatedResult = {};

      player2Weapon = parseInt(player2Weapon, 10);
      caculatedResult = (0, _helpers.getResult)(player1Weapon, player2Weapon);
      player1.result = results[caculatedResult.player1];
      player2.weaponName = player2WeaponName;
      player2.weapon = player2Weapon;
      player2.type = type ? 'You' : 'NPC';
      player2.result = results[caculatedResult.player2];

      this.setState({
        player1: player1,
        player2: player2
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          type = _props2.type,
          configs = _props2.configs,
          _state2 = this.state,
          player1 = _state2.player1,
          player2 = _state2.player2,
          weapons = configs.weapons;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, type ? _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, weapons.map(function (w, i) {
        return _react2.default.createElement('li', { key: 'w-' + i, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('button', { value: i, onClick: _this2._handleWeaponClicked, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, w));
      })) : false, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_player2.default, (0, _extends3.default)({ player: 0 }, player1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_player2.default, (0, _extends3.default)({ player: type }, player2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))));
    }
  }]);

  return Game;
}(_react.Component);

Game.propTypes = {
  type: _propTypes2.default.number
};

Game.defaultProps = {
  configs: {
    weapons: ['scissors', 'paper', 'rock'],
    players: ['npc', 'you'],
    results: ['loose', 'win', 'tie']
  }
};

exports.default = Game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dhbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQbGF5ZXIiLCJnZXRSZXN1bHQiLCJHYW1lIiwicHJvcHMiLCJfaGFuZGxlV2VhcG9uQ2xpY2tlZCIsImJpbmQiLCJ0eXBlIiwiY29uZmlncyIsIndlYXBvbnMiLCJ3ZWFwb24xIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicGxheWVyMSIsIndlYXBvbiIsIndlYXBvbk5hbWUiLCJyZXN1bHQiLCJwbGF5ZXIyIiwic3RhdGUiLCJlIiwicmVzdWx0cyIsInBsYXllcjFXZWFwb24iLCJwbGF5ZXIyV2VhcG9uIiwidGFyZ2V0IiwidmFsdWUiLCJwbGF5ZXIyV2VhcG9uTmFtZSIsImNhY3VsYXRlZFJlc3VsdCIsInBhcnNlSW50Iiwic2V0U3RhdGUiLCJtYXAiLCJ3IiwiaSIsInByb3BUeXBlcyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInBsYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBaUI7Ozs7Ozs7SUFFcEIsQTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyx1QkFBdUIsTUFBQSxBQUFLLHFCQUFMLEFBQTBCLEtBRnJDLEFBRWpCO1FBRmlCLEFBR1gsT0FIVyxBQUdPLE1BSFAsQUFHWDtRQUhXLEFBR0wsVUFISyxBQUdPLE1BSFAsQUFHTDtRQUhLLEFBSVgsVUFKVyxBQUlDLFFBSkQsQUFJWDtRQUpXLEFBS2IsVUFBVSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBVyxRQUEzQixBQUFtQyxVQUxoQyxBQUswQztRQUwxQyxBQU1iO1lBQVUsQUFDRixBQUNOO2NBRlEsQUFFQSxBQUNSO2tCQUFZLFFBSEosQUFHSSxBQUFRLEFBQ3BCO2NBVlcsQUFNSCxBQUlBO0FBSkEsQUFDUjtRQVBXLEFBWWI7WUFBVSxBQUNGLEFBQ047Y0FGUSxBQUVBLEFBQ1I7a0JBSFEsQUFHSSxBQUNaO2NBaEJXLEFBWUgsQUFJQSxBQUdkO0FBUGMsQUFDUjs7VUFNTixBQUFLO2VBQVEsQUFFWDtlQXJCZSxBQW1CakIsQUFBYTtBQUFBLEFBQ1g7V0FHSDs7Ozs7eUNBRW9CLEEsR0FBRzttQkFDSyxLQURMLEFBQ1U7VUFEVixBQUNoQixpQkFEZ0IsQUFDaEI7VUFEZ0IsQUFDUCxpQkFETyxBQUNQO21CQUNTLEtBRkYsQUFFTztVQUZQLEFBRWhCLGlCQUZnQixBQUVoQjtVQUZnQixBQUVQLGNBRk8sQUFFUDtVQUZPLEFBR2hCLFVBSGdCLEFBR0osUUFISSxBQUdoQjtVQUhnQixBQUlsQixnQkFBZ0IsUUFKRSxBQUlNO1VBSk4sQUFLbEIsZ0JBQWdCLEVBQUEsQUFBRSxPQUxBLEFBS087VUFMUCxBQU1sQixvQkFBb0IsUUFBQSxBQUFRLFFBTlYsQUFNRSxBQUFnQjtVQU5sQixBQU9sQixrQkFQa0IsQUFPQSxBQUV0Qjs7c0JBQWdCLFNBQUEsQUFBUyxlQUF6QixBQUFnQixBQUF3QixBQUN4Qzt3QkFBa0Isd0JBQUEsQUFBVSxlQUE1QixBQUFrQixBQUF5QixBQUMzQztjQUFBLEFBQVEsU0FBUyxRQUFRLGdCQUF6QixBQUFpQixBQUF3QixBQUN6QztjQUFBLEFBQVEsYUFBUixBQUFxQixBQUNyQjtjQUFBLEFBQVEsU0FBUixBQUFpQixBQUNqQjtjQUFBLEFBQVEsT0FBTyxPQUFBLEFBQU8sUUFBdEIsQUFBOEIsQUFDOUI7Y0FBQSxBQUFRLFNBQVMsUUFBUSxnQkFBekIsQUFBaUIsQUFBd0IsQUFFekM7O1dBQUEsQUFBSztpQkFBUyxBQUVaO2lCQUZGLEFBQWMsQUFJZjtBQUplLEFBQ1o7Ozs7NkJBS0s7bUJBQUE7O29CQUNpQixLQURqQixBQUNzQjtVQUR0QixBQUNELGVBREMsQUFDRDtVQURDLEFBQ0ssa0JBREwsQUFDSztvQkFDZSxLQUZwQixBQUV5QjtVQUZ6QixBQUVELGtCQUZDLEFBRUQ7VUFGQyxBQUVRLGtCQUZSLEFBRVE7VUFGUixBQUdELFVBSEMsQUFHVyxRQUhYLEFBR0QsQUFDTjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFFSTtBQUZKO0FBQUEsT0FBQSx5QkFHTSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFVBQ0UsQUFBUSxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjsrQkFBVyxjQUFBLFFBQUksWUFBSixBQUFjO3NCQUFkO3dCQUFBLEFBQW1CO0FBQW5CO1NBQUEsa0JBQW1CLGNBQUEsWUFBUSxPQUFSLEFBQWUsR0FBRyxTQUFTLE9BQTNCLEFBQWdDO3NCQUFoQzt3QkFBQSxBQUF3RDtBQUF4RDtXQUE5QixBQUFXLEFBQW1CO0FBRjlDLEFBQ0UsQUFDRSxZQUpSLEFBTVEsQUFHSix1QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxBQUFDLHlEQUFPLFFBQVIsQUFBZ0IsS0FBaEIsQUFBdUI7O29CQUF2QjtzQkFETixBQUNFLEFBQUksQUFDSjtBQURJO0FBQUEsNEJBQ0osY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksQUFBQyx5REFBTyxRQUFSLEFBQWdCLFFBQWhCLEFBQTBCOztvQkFBMUI7c0JBWlosQUFDRSxBQVNJLEFBRUUsQUFBSSxBQUtiO0FBTGE7QUFBQTs7Ozs7QUFqRUcsQTs7QUF5RW5CLEtBQUEsQUFBSztRQUNHLG9CQURSLEFBQWlCLEFBQ0M7QUFERCxBQUNmOztBQUdGLEtBQUEsQUFBSzs7YUFFUSxDQUFBLEFBQUUsWUFBRixBQUFjLFNBRGhCLEFBQ0UsQUFBdUIsQUFDaEM7YUFBUyxDQUFBLEFBQUUsT0FGSixBQUVFLEFBQVMsQUFDbEI7YUFBUyxDQUFBLEFBQUMsU0FBRCxBQUFVLE9BSnZCLEFBQW9CLEFBQ1QsQUFHRSxBQUFpQixBQUk5QjtBQVBXLEFBQ1A7QUFGZ0IsQUFDbEI7O2tCQU9GLEFBQWUiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5nb3JhL3JvY2twYXBlcnNjaXNzb3JzIn0=