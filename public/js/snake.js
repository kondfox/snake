'use strict';
import { initPiece } from './snake-piece.js';

const initSnake = (x, y, size, dir) => {
  let pieces = new Array(size)
    .fill()
    .map(piece => initPiece(size - 1 - x--, y, dir));
  let [head, ...body] = pieces;

  const changeDirection = (newDirection) => {
    head.changeDirection(newDirection);
  };
  
  const move = () => {
    pieces.forEach(piece => piece.movePiece());
    body.slice().reverse()
      .forEach((piece, i) => piece.changeDirection(pieces[pieces.length - 2 - i].getDirection()));
  };

  const render = (renderMethod) => {
    pieces.forEach(piece => piece.render(renderMethod));
  };

  return { changeDirection, move, render };
};

export { initSnake };