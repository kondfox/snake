'use strict';

const canvas = document.getElementById('canvas');
const snakePieceBodySize = 16;
const snakePieceOffset = 2;
const snakePieceSize = 2 * snakePieceOffset + snakePieceBodySize;

const game = {
  speed: 100,
  snakeSize: 100,
  startX: 0,
  startY: 0,
  maxX: canvas.width / snakePieceSize,
  maxY: canvas.height / snakePieceSize,
  startDirection: 'ArrowRight',
};

export { canvas, snakePieceBodySize, snakePieceSize, game };