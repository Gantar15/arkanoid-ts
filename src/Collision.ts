import {CanvasView} from "./view/CanvasView";
import Ball from './sprites/Ball';
import Brick from './sprites/Brick';
import Paddle from './sprites/Paddle';

export default class Collision{
    static checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView, gameOverCllbk: (view: CanvasView) => void): void {
        // 1. Check ball collision with paddle
        if (
          ball.pos.x + ball.width > paddle.pos.x &&
          ball.pos.x < paddle.pos.x + paddle.width &&
          ball.pos.y + ball.height >= paddle.pos.y
        ) {
            ball.changeYDirection();
        }

        // 2. Check ball collision with walls
        // Ball movement X constraints
        if(ball.pos.x <= 0 || ball.pos.x + ball.width >= view.canvas.width)
            ball.changeXDirection();

        // Ball movement Y constraints
        if(ball.pos.y <= 0)
            ball.changeYDirection();

        // 3. Check gameover
        if(ball.pos.y + ball.height > view.canvas.height){
            gameOverCllbk(view);
        }
    }

    static isCollidingBrick(ball: Ball, brick: Brick): boolean{
        if(ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y){
            return true;
        }
        return false;
    }

    static reduceCollidingBricks(ball: Ball, bricks: Brick[]): number{
        let scorePower: number = 0;

        bricks.forEach((brick, index) => {
            if(Collision.isCollidingBrick(ball, brick)){
                if(brick.energy === 0){
                    bricks.splice(index, 1);
                    scorePower = brick.power;
                }
                else
                    --brick.energy;
                ball.changeYDirection();
            }
        });
        return scorePower;
    }
}
