'use strict';
import { canvas, snakePieceBodySize, snakePieceSize, game } from './settings.js';
import { initSnake } from './snake.js';

const ctx = canvas.getContext('2d');

let snake = initSnake(game.startX, game.startY, game.snakeSize, game.startDirection);

document.addEventListener('keydown', (event) => {
  snake.changeDirection(event.key);
});

const run = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.render(draw);
  snake.move();
  window.setTimeout(run, game.speed);
};

const draw = (x, y) => {
  ctx.fillRect(snakePieceSize * x, snakePieceSize * y, snakePieceBodySize, snakePieceBodySize);
}

run(); 