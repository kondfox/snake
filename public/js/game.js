'use strict';
import { snakePiece } from './settings.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x % canvas.width, 0, snakePiece.bodySize, snakePiece.bodySize);
    x += 2 * snakePiece.offset + snakePiece.bodySize;
    window.setTimeout(render, 200);
};

render();

  