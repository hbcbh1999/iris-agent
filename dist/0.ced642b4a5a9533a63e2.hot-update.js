webpackHotUpdate(0,{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.setInput = exports.PredictionStrip = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _python = __webpack_require__(61);\n\nvar _reactRedux = __webpack_require__(30);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// set main input text and update hint\nvar setInput = function setInput(text) {\n    return function () {\n        var stripText = text.replace(/{/g, '').replace(/}/g, '');\n        _InputBox.input.value = stripText;\n        (0, _python.updateHint)(stripText);\n    };\n};\n\n// TODO: should logic that binds to tab-key press be here as well?\n\n// defines component for prediction strip above main input text\nvar PredictionStrip = function PredictionStrip(_ref) {\n    var predictions = _ref.predictions;\n\n    var charLength = predictions.map(function (p) {\n        return p.text.length;\n    }).reduce(function (x, y) {\n        return x + y;\n    }, 0);\n    console.log(charLength);\n    return _react2.default.createElement(\n        'div',\n        { className: 'prediction_strip' },\n        _react2.default.createElement(\n            'div',\n            { className: 'predictions', style: { width: charLength * 6 + \"px\" } },\n            predictions.map(function (obj, i) {\n                return _react2.default.createElement(\n                    'span',\n                    { onClick: setInput(obj.text), className: \"prediction \" + obj.style },\n                    obj.text\n                );\n            })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        predictions: state.predictions\n    };\n};\n\nexports.PredictionStrip = PredictionStrip = (0, _reactRedux.connect)(mapStateToProps)(PredictionStrip);\n\nexports.PredictionStrip = PredictionStrip;\nexports.setInput = setInput;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanM/ZDFhMiJdLCJuYW1lcyI6WyJzZXRJbnB1dCIsInRleHQiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJQcmVkaWN0aW9uU3RyaXAiLCJwcmVkaWN0aW9ucyIsImNoYXJMZW5ndGgiLCJtYXAiLCJwIiwibGVuZ3RoIiwicmVkdWNlIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJvYmoiLCJpIiwic3R5bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQTtBQUNBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDdkIsV0FBTyxZQUFNO0FBQ1QsWUFBSUMsWUFBWUQsS0FBS0UsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQWhCO0FBQ0Esd0JBQU1DLEtBQU4sR0FBY0YsU0FBZDtBQUNBLGdDQUFXQSxTQUFYO0FBQ0gsS0FKRDtBQUtILENBTkQ7O0FBUUE7O0FBRUE7QUFDQSxJQUFJRyxrQkFBa0IsK0JBQW1CO0FBQUEsUUFBakJDLFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFDdkMsUUFBTUMsYUFBYUQsWUFBWUUsR0FBWixDQUFnQixVQUFDQyxDQUFEO0FBQUEsZUFBT0EsRUFBRVIsSUFBRixDQUFPUyxNQUFkO0FBQUEsS0FBaEIsRUFBc0NDLE1BQXRDLENBQTZDLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLGVBQVNELElBQUlDLENBQWI7QUFBQSxLQUE3QyxFQUE2RCxDQUE3RCxDQUFuQjtBQUNBQyxZQUFRQyxHQUFSLENBQVlSLFVBQVo7QUFDQSxXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFDRjtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWYsRUFBNkIsT0FBTyxFQUFDUyxPQUFPVCxhQUFhLENBQWIsR0FBaUIsSUFBekIsRUFBcEM7QUFDR0Qsd0JBQVlFLEdBQVosQ0FBZ0IsVUFBQ1MsR0FBRCxFQUFLQyxDQUFMO0FBQUEsdUJBQVc7QUFBQTtBQUFBLHNCQUFNLFNBQVNsQixTQUFTaUIsSUFBSWhCLElBQWIsQ0FBZixFQUFtQyxXQUFXLGdCQUFnQmdCLElBQUlFLEtBQWxFO0FBQTJFRix3QkFBSWhCO0FBQS9FLGlCQUFYO0FBQUEsYUFBaEI7QUFESDtBQURFLEtBQVI7QUFLRCxDQVJEOztBQVlBLElBQU1tQixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDZixxQkFBYWUsTUFBTWY7QUFEYSxLQUFaO0FBQUEsQ0FBeEI7O0FBSUEsUUFFUUQsZUFGUixxQkFBa0IseUJBQVFlLGVBQVIsRUFBeUJmLGVBQXpCLENBQWxCOztRQUVRQSxlLEdBQUFBLGU7UUFBaUJMLFEsR0FBQUEsUSIsImZpbGUiOiI1MDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gc2V0IG1haW4gaW5wdXQgdGV4dCBhbmQgdXBkYXRlIGhpbnRcbmNvbnN0IHNldElucHV0ID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gdGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBzdHJpcFRleHQ7XG4gICAgICAgIHVwZGF0ZUhpbnQoc3RyaXBUZXh0KTtcbiAgICB9O1xufTtcblxuLy8gVE9ETzogc2hvdWxkIGxvZ2ljIHRoYXQgYmluZHMgdG8gdGFiLWtleSBwcmVzcyBiZSBoZXJlIGFzIHdlbGw/XG5cbi8vIGRlZmluZXMgY29tcG9uZW50IGZvciBwcmVkaWN0aW9uIHN0cmlwIGFib3ZlIG1haW4gaW5wdXQgdGV4dFxubGV0IFByZWRpY3Rpb25TdHJpcCA9ICh7cHJlZGljdGlvbnN9KSA9PiB7XG4gIGNvbnN0IGNoYXJMZW5ndGggPSBwcmVkaWN0aW9ucy5tYXAoKHApID0+IHAudGV4dC5sZW5ndGgpLnJlZHVjZSgoeCx5KSA9PiB4ICsgeSwgMCk7XG4gIGNvbnNvbGUubG9nKGNoYXJMZW5ndGgpO1xuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicHJlZGljdGlvbl9zdHJpcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb25zXCIgc3R5bGU9e3t3aWR0aDogY2hhckxlbmd0aCAqIDYgKyBcInB4XCJ9fT5cbiAgICAgICAgICB7cHJlZGljdGlvbnMubWFwKChvYmosaSkgPT4gPHNwYW4gb25DbGljaz17c2V0SW5wdXQob2JqLnRleHQpfSBjbGFzc05hbWU9e1wicHJlZGljdGlvbiBcIiArIG9iai5zdHlsZX0+eyBvYmoudGV4dCB9PC9zcGFuPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbn07XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgcHJlZGljdGlvbnM6IHN0YXRlLnByZWRpY3Rpb25zXG59KTtcblxuUHJlZGljdGlvblN0cmlwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByZWRpY3Rpb25TdHJpcCk7XG5cbmV4cG9ydCB7UHJlZGljdGlvblN0cmlwLCBzZXRJbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})