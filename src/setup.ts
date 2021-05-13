import RED_BRICK_IMAGE from './images/brick-red.png';
import BLUE_BRICK_IMAGE from './images/brick-blue.png';
import GREEN_BRICK_IMAGE from './images/brick-green.png';
import YELLOW_BRICK_IMAGE from './images/brick-yellow.png';
import PURPLE_BRICK_IMAGE from './images/brick-purple.png';
import WIN_BCAKGROUND_IMAGE from "./images/winbg.png";
export const WIN_BCAKGROUND_SRC = WIN_BCAKGROUND_IMAGE;

const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100;
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 45;
export const PADDLE_STARTX = 425;
export const PADDLE_SPEED = 12;
export const BALL_SPEED = 8;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

export const BRICK_IMAGES: { [key: number]: string } = {
  1: RED_BRICK_IMAGE,
  2: GREEN_BRICK_IMAGE,
  3: YELLOW_BRICK_IMAGE,
  4: BLUE_BRICK_IMAGE,
  5: PURPLE_BRICK_IMAGE
};

export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Red brick
  2: 1, // Green brick
  3: 2, // Yellow brick
  4: 2, // Blue brick
  5: 3 // Purple brick
};

export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 4, 4, 3, 3, 4, 4, 0, 0, 
  0, 0, 1, 2, 0, 0, 2, 1, 0, 0,
];
