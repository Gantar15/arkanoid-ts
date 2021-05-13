import { Vector } from '../types';

export default class Paddle{
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private speed: number,
    private paddleWidth: number,
    private paddleHeight: number,
    private position: Vector,
    image: string
  ) {
    this.moveLeft = false;
    this.moveRight = false;
    this.paddleImage.src = image;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  get width(): number {
    return this.paddleWidth;
  }

  get height(): number {
    return this.paddleHeight;
  }

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.paddleImage;
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

  movePaddle(): void {
    if (this.moveLeft) this.pos.x -= this.speed;
    if (this.moveRight) this.pos.x += this.speed;
  }

  handleKeyDown(event: KeyboardEvent): void{
    if(event.key === "ArrowRight"){
        this.moveRight = true;
    }
    else if(event.key === "ArrowLeft"){
        this.moveLeft = true;
    }
  }

  handleKeyUp(event: KeyboardEvent): void{
    if(event.key === "ArrowRight"){
        this.moveRight = false;
    }
    else if(event.key === "ArrowLeft"){
        this.moveLeft = false;
    }
  }
}