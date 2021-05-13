import { Vector } from '../types';

export default class Brick{
    private brickImage: HTMLImageElement = new Image();
    private readonly price: number;

    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnergy: number,
        image: string
    ){
        this.brickImage.src = image;
        this.price = brickEnergy;
    }

    get width(): number {
        return this.brickWidth;
    }
    
    get height(): number {
    return this.brickHeight;
    }
    
    get pos(): Vector {
    return this.position;
    }
    
    get image(): HTMLImageElement {
    return this.brickImage;
    }
    
    get energy(): number {
    return this.brickEnergy;
    }

    get power(): number{
        return this.price;
    }
    
    set energy(energy: number) {
    this.brickEnergy = energy;
    }
}