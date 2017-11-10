webpackHotUpdate(0,{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.setInput = exports.PredictionStrip = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _python = __webpack_require__(61);\n\nvar _index = __webpack_require__(35);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// set main input text and update hint\nvar setInput = function setInput(dispatch, text, id) {\n    return function () {\n        var stripText = text.replace(/{/g, '').replace(/}/g, '');\n        _InputBox.input.value = stripText;\n        (0, _python.updateHint)(stripText);\n        dispatch((0, _index.storeClassIndex)(id));\n    };\n};\n\nvar reorder = function reorder(currIndex, predictions) {\n    return [_.filter(predictions, function (p) {\n        return p.id === currIndex;\n    })];\n};\n\n// TODO: should logic that binds to tab-key press be here as well?\n\n// defines component for prediction strip above main input text\nvar PredictionStrip = function PredictionStrip(_ref) {\n    var dispatch = _ref.dispatch,\n        predictions = _ref.predictions,\n        currIndex = _ref.currIndex;\n\n    // TODO: optimize width\n    var charLength = predictions.map(function (p) {\n        return p.text.length;\n    }).reduce(function (x, y) {\n        return x + y;\n    }, 0);\n    return _react2.default.createElement(\n        'div',\n        { className: 'prediction_strip' },\n        _react2.default.createElement(\n            'div',\n            { className: 'predictions', style: { width: charLength * 9 + \"px\" } },\n            reorder(predictions).map(function (obj, i) {\n                return _react2.default.createElement(\n                    'span',\n                    { onClick: setInput(dispatch, obj.text, obj.id), className: \"prediction \" + obj.style },\n                    obj.text\n                );\n            })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        predictions: state.predictions,\n        currIndex: state.currentInput.currIndex // for selected prediction\n    };\n};\n\nexports.PredictionStrip = PredictionStrip = (0, _reactRedux.connect)(mapStateToProps)(PredictionStrip);\n\nexports.PredictionStrip = PredictionStrip;\nexports.setInput = setInput;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanM/ZDFhMiJdLCJuYW1lcyI6WyJfIiwic2V0SW5wdXQiLCJkaXNwYXRjaCIsInRleHQiLCJpZCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsInJlb3JkZXIiLCJjdXJySW5kZXgiLCJwcmVkaWN0aW9ucyIsImZpbHRlciIsInAiLCJQcmVkaWN0aW9uU3RyaXAiLCJjaGFyTGVuZ3RoIiwibWFwIiwibGVuZ3RoIiwicmVkdWNlIiwieCIsInkiLCJ3aWR0aCIsIm9iaiIsImkiLCJzdHlsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY3VycmVudElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7Ozs7O0FBRVo7QUFDQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQWlCQyxFQUFqQixFQUF3QjtBQUNyQyxXQUFPLFlBQU07QUFDVCxZQUFJQyxZQUFZRixLQUFLRyxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixFQUF1QkEsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBcUMsRUFBckMsQ0FBaEI7QUFDQSx3QkFBTUMsS0FBTixHQUFjRixTQUFkO0FBQ0EsZ0NBQVdBLFNBQVg7QUFDQUgsaUJBQVMsNEJBQWdCRSxFQUFoQixDQUFUO0FBQ0gsS0FMRDtBQU1ILENBUEQ7O0FBU0EsSUFBTUksVUFBVSxTQUFWQSxPQUFVLENBQUNDLFNBQUQsRUFBWUMsV0FBWixFQUE0QjtBQUMxQyxXQUFPLENBQUNWLEVBQUVXLE1BQUYsQ0FBU0QsV0FBVCxFQUFzQixVQUFDRSxDQUFEO0FBQUEsZUFBT0EsRUFBRVIsRUFBRixLQUFTSyxTQUFoQjtBQUFBLEtBQXRCLENBQUQsQ0FBUDtBQUNELENBRkQ7O0FBSUE7O0FBRUE7QUFDQSxJQUFJSSxrQkFBa0IsK0JBQXdDO0FBQUEsUUFBdENYLFFBQXNDLFFBQXRDQSxRQUFzQztBQUFBLFFBQTVCUSxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxRQUFmRCxTQUFlLFFBQWZBLFNBQWU7O0FBQzVEO0FBQ0EsUUFBTUssYUFBYUosWUFBWUssR0FBWixDQUFnQixVQUFDSCxDQUFEO0FBQUEsZUFBT0EsRUFBRVQsSUFBRixDQUFPYSxNQUFkO0FBQUEsS0FBaEIsRUFBc0NDLE1BQXRDLENBQTZDLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLGVBQVNELElBQUlDLENBQWI7QUFBQSxLQUE3QyxFQUE2RCxDQUE3RCxDQUFuQjtBQUNBLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUNGO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZixFQUE2QixPQUFPLEVBQUNDLE9BQVFOLGFBQWEsQ0FBZCxHQUFtQixJQUEzQixFQUFwQztBQUNHTixvQkFBUUUsV0FBUixFQUFxQkssR0FBckIsQ0FBeUIsVUFBQ00sR0FBRCxFQUFLQyxDQUFMO0FBQUEsdUJBQVc7QUFBQTtBQUFBLHNCQUFNLFNBQVNyQixTQUFTQyxRQUFULEVBQW1CbUIsSUFBSWxCLElBQXZCLEVBQTZCa0IsSUFBSWpCLEVBQWpDLENBQWYsRUFBcUQsV0FBVyxnQkFBZ0JpQixJQUFJRSxLQUFwRjtBQUE2RkYsd0JBQUlsQjtBQUFqRyxpQkFBWDtBQUFBLGFBQXpCO0FBREg7QUFERSxLQUFSO0FBS0QsQ0FSRDs7QUFZQSxJQUFNcUIsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ2YscUJBQWFlLE1BQU1mLFdBRGE7QUFFaENELG1CQUFXZ0IsTUFBTUMsWUFBTixDQUFtQmpCLFNBRkUsQ0FFUTtBQUZSLEtBQVo7QUFBQSxDQUF4Qjs7QUFLQSxRQUVRSSxlQUZSLHFCQUFrQix5QkFBUVcsZUFBUixFQUF5QlgsZUFBekIsQ0FBbEI7O1FBRVFBLGUsR0FBQUEsZTtRQUFpQlosUSxHQUFBQSxRIiwiZmlsZSI6IjUwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4uL2NvbnRhaW5lcnMvSW5wdXRCb3gnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgc3RvcmVDbGFzc0luZGV4LCBjbGVhckNsYXNzSW5kZXggfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIHNldCBtYWluIGlucHV0IHRleHQgYW5kIHVwZGF0ZSBoaW50XG5jb25zdCBzZXRJbnB1dCA9IChkaXNwYXRjaCwgdGV4dCAsaWQpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gdGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBzdHJpcFRleHQ7XG4gICAgICAgIHVwZGF0ZUhpbnQoc3RyaXBUZXh0KTtcbiAgICAgICAgZGlzcGF0Y2goc3RvcmVDbGFzc0luZGV4KGlkKSk7XG4gICAgfTtcbn07XG5cbmNvbnN0IHJlb3JkZXIgPSAoY3VyckluZGV4LCBwcmVkaWN0aW9ucykgPT4ge1xuICByZXR1cm4gW18uZmlsdGVyKHByZWRpY3Rpb25zLCAocCkgPT4gcC5pZCA9PT0gY3VyckluZGV4KV1cbn07XG5cbi8vIFRPRE86IHNob3VsZCBsb2dpYyB0aGF0IGJpbmRzIHRvIHRhYi1rZXkgcHJlc3MgYmUgaGVyZSBhcyB3ZWxsP1xuXG4vLyBkZWZpbmVzIGNvbXBvbmVudCBmb3IgcHJlZGljdGlvbiBzdHJpcCBhYm92ZSBtYWluIGlucHV0IHRleHRcbmxldCBQcmVkaWN0aW9uU3RyaXAgPSAoe2Rpc3BhdGNoLCBwcmVkaWN0aW9ucywgY3VyckluZGV4fSkgPT4ge1xuICAvLyBUT0RPOiBvcHRpbWl6ZSB3aWR0aFxuICBjb25zdCBjaGFyTGVuZ3RoID0gcHJlZGljdGlvbnMubWFwKChwKSA9PiBwLnRleHQubGVuZ3RoKS5yZWR1Y2UoKHgseSkgPT4geCArIHksIDApO1xuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicHJlZGljdGlvbl9zdHJpcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb25zXCIgc3R5bGU9e3t3aWR0aDogKGNoYXJMZW5ndGggKiA5KSArIFwicHhcIn19PlxuICAgICAgICAgIHtyZW9yZGVyKHByZWRpY3Rpb25zKS5tYXAoKG9iaixpKSA9PiA8c3BhbiBvbkNsaWNrPXtzZXRJbnB1dChkaXNwYXRjaCwgb2JqLnRleHQsIG9iai5pZCl9IGNsYXNzTmFtZT17XCJwcmVkaWN0aW9uIFwiICsgb2JqLnN0eWxlfT57IG9iai50ZXh0IH08L3NwYW4+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xufTtcblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG4gICAgY3VyckluZGV4OiBzdGF0ZS5jdXJyZW50SW5wdXQuY3VyckluZGV4IC8vIGZvciBzZWxlY3RlZCBwcmVkaWN0aW9uXG59KTtcblxuUHJlZGljdGlvblN0cmlwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByZWRpY3Rpb25TdHJpcCk7XG5cbmV4cG9ydCB7UHJlZGljdGlvblN0cmlwLCBzZXRJbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})