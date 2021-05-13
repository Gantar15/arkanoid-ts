import {CanvasView} from "./view/CanvasView";
import Ball from './sprites/Ball';
import Brick from './sprites/Brick';
import Paddle from './sprites/Paddle';
import Collision from './Collision';

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
import {WIN_BCAKGROUND_SRC} from './setup';

import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
    BRICK_PADDING
  } from './setup';
  
import {createBricks} from "./helpers";

let BASE_BACKGROUND_SRC: string;
let gameOver = false;
let score = 0;
  
function setGameOver(view: CanvasView) {
  stopGame(view);
  view.drawInfo('Game Over!');
  gameOver = true;
}

function setGameWin(view: CanvasView) {
  stopGame(view);
  view.drawInfo('Game Won!');
  view.backgroundSrc = WIN_BCAKGROUND_SRC;
  gameOver = true;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
){
  console.log('render!');
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);

  ball.moveBall();

  if (
    paddle.isMovingLeft && paddle.pos.x > 0 ||
    paddle.isMovingRight && paddle.pos.x + paddle.width < view.canvas.width
  ) {
    paddle.movePaddle();
  }
  
  //Collision
  Collision.checkBallCollision(ball, paddle, view, setGameOver);
  const scoreAdder = Collision.reduceCollidingBricks(ball, bricks);
  score += scoreAdder;

  //Won 
  if(!bricks.length)
    setGameWin(view);

  view.drawScore(score);
  //Gameover
  if(gameOver){
    return;
  }
  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball));
}

function startGame(view: CanvasView){
    gameOver = false;
    console.log("start game!");
    view.backgroundSrc = BASE_BACKGROUND_SRC;
    view.drawInfo("playing...");
    view.drawScore(score);

    const paddle = new Paddle(
      PADDLE_SPEED,
      PADDLE_WIDTH, 
      PADDLE_HEIGHT, 
      {x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - BRICK_PADDING},
      PADDLE_IMAGE);

    const ball = new Ball(
      BALL_SPEED,
      BALL_SIZE,
      {
        x: BALL_STARTX,
        y: BALL_STARTY
      },
      BALL_IMAGE
    );

    const bricks = createBricks();

    if(view.start && view.stop){
      view.start.style.display = "none";
      view.stop.style.display = "";
    }

    gameLoop(view, bricks, paddle, ball);
}

function stopGame(view: CanvasView){
  console.log("stop game!");
  view.drawInfo("Press play!");

  if(view.start && view.stop){
    view.start.style.display = "";
    view.stop.style.display = "none";
  }

  gameOver = true;
  score = 0;
}

const view = new CanvasView('#playField');
BASE_BACKGROUND_SRC = view.backgroundSrc;
view.initStartButton(startGame);
view.initStopButton(stopGame);