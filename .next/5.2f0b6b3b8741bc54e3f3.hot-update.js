webpackHotUpdate(5,{

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(43);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(51);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _player = __webpack_require__(385);

var _player2 = _interopRequireDefault(_player);

var _helpers = __webpack_require__(389);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dhbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQbGF5ZXIiLCJnZXRSZXN1bHQiLCJHYW1lIiwicHJvcHMiLCJfaGFuZGxlV2VhcG9uQ2xpY2tlZCIsImJpbmQiLCJ0eXBlIiwiY29uZmlncyIsIndlYXBvbnMiLCJ3ZWFwb24xIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicGxheWVyMSIsIndlYXBvbiIsIndlYXBvbk5hbWUiLCJyZXN1bHQiLCJwbGF5ZXIyIiwic3RhdGUiLCJlIiwicmVzdWx0cyIsInBsYXllcjFXZWFwb24iLCJwbGF5ZXIyV2VhcG9uIiwidGFyZ2V0IiwidmFsdWUiLCJwbGF5ZXIyV2VhcG9uTmFtZSIsImNhY3VsYXRlZFJlc3VsdCIsInBhcnNlSW50Iiwic2V0U3RhdGUiLCJtYXAiLCJ3IiwiaSIsInByb3BUeXBlcyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInBsYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBaUI7Ozs7Ozs7SUFFcEIsQTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyx1QkFBdUIsTUFBQSxBQUFLLHFCQUFMLEFBQTBCLEtBRnJDLEFBRWpCO1FBRmlCLEFBR1gsT0FIVyxBQUdPLE1BSFAsQUFHWDtRQUhXLEFBR0wsVUFISyxBQUdPLE1BSFAsQUFHTDtRQUhLLEFBSVgsVUFKVyxBQUlDLFFBSkQsQUFJWDtRQUpXLEFBS2IsVUFBVSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBVyxRQUEzQixBQUFtQyxVQUxoQyxBQUswQztRQUwxQyxBQU1iO1lBQVUsQUFDRixBQUNOO2NBRlEsQUFFQSxBQUNSO2tCQUFZLFFBSEosQUFHSSxB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/angora/rockpaperscissors/pages/game.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/angora/rockpaperscissors/pages/game.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/game")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yZjBiNmIzYjg3NDFiYzU0ZTNmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FtZS5qcz85MTNhMGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgeyBnZXRSZXN1bHQgfSBmcm9tICcuL2xpYi9oZWxwZXJzJ1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYW5kbGVXZWFwb25DbGlja2VkID0gdGhpcy5faGFuZGxlV2VhcG9uQ2xpY2tlZC5iaW5kKHRoaXMpXG4gICAgbGV0IHsgdHlwZSwgY29uZmlncyB9ID0gcHJvcHMsXG4gICAgICAgIHsgd2VhcG9ucyB9ID0gY29uZmlncyxcbiAgICAgICAgd2VhcG9uMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbnMubGVuZ3RoKSArIDEsXG4gICAgICAgIHBsYXllcjEgPSB7XG4gICAgICAgICAgdHlwZTogJ25wYycsXG4gICAgICAgICAgd2VhcG9uOiB3ZWFwb24xLFxuICAgICAgICAgIHdlYXBvbk5hbWU6IHdlYXBvbnNbd2VhcG9uMV0sXG4gICAgICAgICAgcmVzdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXIyID0ge1xuICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgIHdlYXBvbjogJycsXG4gICAgICAgICAgd2VhcG9uTmFtZTogJycsXG4gICAgICAgICAgcmVzdWx0OiAnJ1xuICAgICAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyMSxcbiAgICAgIHBsYXllcjJcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlV2VhcG9uQ2xpY2tlZChlKSB7XG4gICAgbGV0IHsgcGxheWVyMSwgcGxheWVyMiB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgeyBjb25maWdzLCB0eXBlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICB7IHJlc3VsdHMgfSA9IGNvbmZpZ3MsXG4gICAgICAgIHBsYXllcjFXZWFwb24gPSBwbGF5ZXIxLndlYXBvbixcbiAgICAgICAgcGxheWVyMldlYXBvbiA9IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICBwbGF5ZXIyV2VhcG9uTmFtZSA9IGNvbmZpZ3Mud2VhcG9uc1twbGF5ZXIyV2VhcG9uXSxcbiAgICAgICAgY2FjdWxhdGVkUmVzdWx0ID0ge31cblxuICAgIHBsYXllcjJXZWFwb24gPSBwYXJzZUludChwbGF5ZXIyV2VhcG9uLCAxMClcbiAgICBjYWN1bGF0ZWRSZXN1bHQgPSBnZXRSZXN1bHQocGxheWVyMVdlYXBvbiwgcGxheWVyMldlYXBvbilcbiAgICBwbGF5ZXIxLnJlc3VsdCA9IHJlc3VsdHNbY2FjdWxhdGVkUmVzdWx0LnBsYXllcjFdXG4gICAgcGxheWVyMi53ZWFwb25OYW1lID0gcGxheWVyMldlYXBvbk5hbWVcbiAgICBwbGF5ZXIyLndlYXBvbiA9IHBsYXllcjJXZWFwb25cbiAgICBwbGF5ZXIyLnR5cGUgPSB0eXBlID8gJ1lvdScgOiAnTlBDJ1xuICAgIHBsYXllcjIucmVzdWx0ID0gcmVzdWx0c1tjYWN1bGF0ZWRSZXN1bHQucGxheWVyMl1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGxheWVyMSxcbiAgICAgIHBsYXllcjJcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHR5cGUsIGNvbmZpZ3MgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgIHsgcGxheWVyMSwgcGxheWVyMiB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgeyB3ZWFwb25zIH0gPSBjb25maWdzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlID8gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyB3ZWFwb25zLm1hcCgodywgaSkgPT4gKDxsaSBrZXk9e2B3LSR7aX1gfT48YnV0dG9uIHZhbHVlPXtpfSBvbkNsaWNrPXt0aGlzLl9oYW5kbGVXZWFwb25DbGlja2VkfT57IHcgfTwvYnV0dG9uPjwvbGk+KSkgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxQbGF5ZXIgcGxheWVyPXswfSB7Li4ucGxheWVyMX0gLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxQbGF5ZXIgcGxheWVyPXt0eXBlfSB7Li4ucGxheWVyMn0gLz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5HYW1lLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5HYW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29uZmlnczoge1xuICAgIHdlYXBvbnM6IFsgJ3NjaXNzb3JzJywgJ3BhcGVyJywgJ3JvY2snIF0sXG4gICAgcGxheWVyczogWyAnbnBjJywgJ3lvdScgXSxcbiAgICByZXN1bHRzOiBbJ2xvb3NlJywgJ3dpbicsICd0aWUnXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nYW1lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUdBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUhBOzs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFLQTtBQUxBO0FBQUE7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=