createImageBitmap(this._canvas).then((imageBitmap) => {
    // Do something with the imageBitmap
  });
  cancelAnimationFrame(this._raf);
  this._started = false;