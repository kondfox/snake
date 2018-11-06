'use strict';

const canvas = document.getElementById('canvas');
const snakePieceBodySize = 16;
const snakePieceOffset = 2;
const snakePieceSize = 2 * snakePieceOffset + snakePieceBodySize;

const game = {
  speed: 300,
  snakeSize: 5,
  startX: 10,
  startY: 10,
  maxX: canvas.width / snakePieceSize,
  maxY: canvas.height / snakePieceSize,
  startDirection: 'ArrowLeft',
};

export { canvas, snakePieceBodySize, snakePieceSize, game };