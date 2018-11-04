'use strict';

import { game } from './settings.js';

function SnakePiece(x, y, direction) {
  this.x = x >= 0 ? x % game.maxX : game.maxX + (x % game.maxX);
  this.y = y >= 0 ? y % game.maxY : game.maxY + (y % game.maxY);
  this.direction = direction;
};

const nextDirection = (snakePiece, newDirection) => {
  return new SnakePiece(snakePiece.x, snakePiece.y, newDirection);
};

const movePiece = (piece) => {
  
  switch (piece.direction) {
    case 'ArrowUp':
      return new SnakePiece(piece.x, piece.y - 1, piece.direction);
    case 'ArrowDown':
      return new SnakePiece(piece.x, piece.y + 1, piece.direction);
    case 'ArrowLeft':
      return new SnakePiece(piece.x - 1, piece.y, piece.direction);
    case 'ArrowRight':
      return new SnakePiece(piece.x + 1, piece.y, piece.direction);
    default:
      return piece;
  }
};

export { SnakePiece, nextDirection, movePiece };