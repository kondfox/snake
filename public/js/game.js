'use strict';
import { canvas, snakePieceBodySize, snakePieceSize, game } from './settings.js';
import { initSnake, changeDirection, move } from './snake.js';

const ctx = canvas.getContext('2d');

let snake = initSnake(game.startX, game.startY, game.snakeSize, game.startDirection);

document.addEventListener('keydown', (event) => {
  snake = changeDirection(snake, event.key);
});

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.pieces.forEach(piece => 
    ctx.fillRect(snakePieceSize * piece.x, snakePieceSize * piece.y, snakePieceBodySize, snakePieceBodySize)
  );
  snake = move(snake);
  window.setTimeout(render, game.speed);
};

render(); 