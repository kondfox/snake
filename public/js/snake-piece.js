'use strict';

import { game } from './settings.js';

const validateCoordinate = (c, max) => {
  return c >= 0 ? c % max : max + (c % max);
};

const initPiece = (x, y, direction) => {
  x = validateCoordinate(x, game.maxX);
  y = validateCoordinate(y, game.maxY);

  const directionModifier = {
    'ArrowUp': () => y = validateCoordinate(y - 1, game.maxY),
    'ArrowDown': () => y = validateCoordinate(y + 1, game.maxY),
    'ArrowLeft': () => x = validateCoordinate(x - 1, game.maxX),
    'ArrowRight': () => x = validateCoordinate(x + 1, game.maxX),
  };

  const changeDirection = (newDirection) => {
    direction = newDirection;
  };

  const movePiece = () => {
    directionModifier[direction].apply();
  };

  const getDirection = () => {
    return direction;
  };

  const render = (renderMethod) => {
    renderMethod(x, y);
  };

  return { changeDirection, movePiece, getDirection, render }
};

export { initPiece };