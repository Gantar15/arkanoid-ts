import Brick from "../sprites/Brick";
import Ball from "../sprites/Ball";
import Paddle from "../sprites/Paddle";

export class CanvasView{
    public canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    public start: HTMLObjectElement | null;
    public stop: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;
    private backgroundImg: HTMLImageElement | null;

    constructor(canvasName: string){
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector("#start");
        this.info = document.querySelector("#info");
        this.stop = document.querySelector("#stop");
        this.backgroundImg = document.querySelector('#background');
    }

    get backgroundSrc(){
        if(this.backgroundImg)
            return this.backgroundImg.src;
        return "";
    }
    set backgroundSrc(src: string){
        if(this.backgroundImg)
            this.backgroundImg.src = src;
    }

    clear(): void{
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    initStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this));
    }

    initStopButton(stopFunction: (view: CanvasView) => void): void {
        this.stop?.addEventListener('click', () => stopFunction(this));
    }

    drawScore(score: number): void{
        if(this.scoreDisplay) this.scoreDisplay.innerText = score.toString();
    }

    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text;
    }

    drawSprite(brick: Brick | Paddle | Ball): void{
        this.context?.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height
        );
    }

    drawBricks(bricks: Brick[]): void{
        bricks.forEach(brick => this.drawSprite(brick));
    }
}