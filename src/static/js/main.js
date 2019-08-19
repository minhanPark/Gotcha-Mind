(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotifi = void 0;

var handleMessageNotifi = function handleMessageNotifi(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
};

exports.handleMessageNotifi = handleMessageNotifi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaSIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxJQUFJLEVBQUk7QUFBQSxNQUNqQ0MsT0FEaUMsR0FDWEQsSUFEVyxDQUNqQ0MsT0FEaUM7QUFBQSxNQUN4QkMsUUFEd0IsR0FDWEYsSUFEVyxDQUN4QkUsUUFEd0I7QUFFekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlTWVzc2FnZU5vdGlmaSA9IGRhdGEgPT4ge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YCk7XHJcbn07XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

var sendMessage = function sendMessage() {
  socket.emit("newMessage", {
    message: message
  });
  console.log("Me: ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
};

socket.on("messageNotifi", _chat.handleMessageNotifi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjg5MDA0ZDEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsImVtaXQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZmkiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRixFQUFBQSxNQUFNLENBQUNHLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVDLElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUJGLE9BQW5CO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxRQUFRLEVBQUk7QUFDOUJSLEVBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUssSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0QsQ0FGRDs7QUFJQVIsTUFBTSxDQUFDUyxFQUFQLENBQVUsZUFBVixFQUEyQkMseUJBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmaSB9IGZyb20gXCIuL2NoYXRcIjtcclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XHJcbiAgY29uc29sZS5sb2coYE1lOiAke21lc3NhZ2V9YCk7XHJcbn07XHJcblxyXG5jb25zdCBzZXROaWNrbmFtZSA9IG5pY2tuYW1lID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XHJcbn07XHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZpXCIsIGhhbmRsZU1lc3NhZ2VOb3RpZmkpO1xyXG4iXX0=
},{"./chat":1}]},{},[2])