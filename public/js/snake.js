'use strict';
import { SnakePiece, nextDirection, movePiece } from './snake-piece.js';

function Snake(pieces) {
  this.pieces = pieces;
  this.head = this.pieces[pieces.length - 1];
  this.body = this.pieces.slice(0, pieces.length - 1);
}

const initSnake = (x, y, size, dir) => {
  const pieces = new Array(size)
    .fill()
    .map(piece => new SnakePiece(x++, y, dir));
  return new Snake(pieces);
};

const changeDirection = (snake, newDirection) => {
  return new Snake(snake.body.concat([new SnakePiece(snake.head.x, snake.head.y, newDirection)]));
};

const move = (snake) => {
  return new Snake(snake.pieces
    .map(piece => movePiece(piece))
    .map((piece, i) => i < snake.pieces.length - 1 ? nextDirection(piece, snake.pieces[i + 1].direction) : piece)
  );
};

export { Snake, initSnake, changeDirection, move };