import { Application, Sprite} from 'pixi.js';
import { AssetLoader } from '../Assets';
import { Vault } from './Vault';


export class Game {
    app: Application;
    vault: Vault;
    bg: Sprite

    constructor(app:Application){
        this.app = app;

        this.bg = AssetLoader.getSprite('background')
        this.bg.anchor.set?.(0, 0);
        
        this.app.stage.addChildAt(this.bg , 0);

        this.vault = new Vault(this.app)
        this.onResize()
        window.addEventListener('resize', () => this.onResize())
        
    }

    onResize() {
        
        this.app.renderer.resize(window.innerWidth, window.innerHeight);

        this.bg.width = this.app.screen.width;
        this.bg.height = this.app.screen.height;

    
        this.vault.onResize();
    }
}