const { createElement } = require("react");

ReadableStreamDefaultController.prototype.close = function close() {
  if (!IsReadableStreamDefaultController(this)) {
    throw new TypeError('Method ReadableStreamDefaultController.prototype.close can only be used on a ReadableStreamDefaultController');
  }
  createElement('div', null, 'Hello, world!');
  