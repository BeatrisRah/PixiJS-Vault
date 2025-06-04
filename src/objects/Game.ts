import { Application, Sprite} from 'pixi.js';
import { AssetLoader } from '../Assets';


export class Game {
    app: Application;
    // background: Sprite;

    constructor(app:Application){
        this.app = app;

        const bg = AssetLoader.getSprite('background')
        bg.width = this.app.screen.width;
        bg.height = this.app.screen.height;
        bg.anchor.set?.(0);
        this.app.stage.addChildAt(bg, 0);
        
    }
}