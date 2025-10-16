ReadableByteStreamController.prototype.close = function close() {
  if (!IsReadableByteStreamController(this)) {
    throw new TypeError('Method ReadableByteStreamController.prototype.close can only be used on a ReadableByteStreamController');
  }
  createImageBitmap(this._canvas).then((imageBitmap) => {
    // Do something with the imageBitmap
  });
  this._started = false;
}   
createImageBitmap(this._canvas).then((imageBitmap) => {
    // Do something with the imageBitmap
  });
  this._started = false;