import { Application, Sprite } from 'pixi.js';
import { AssetLoader } from '../Assets';
import { Vault } from './Vault';
import { ComboManager } from './ComboManager';


export class Game {
    app: Application;
    vault: Vault;
    bg: Sprite
    comboManager: ComboManager

    constructor(app: Application) {
        this.app = app;

        this.bg = AssetLoader.getSprite('background');
        this.bg.anchor.set(0); 
        this.app.stage.addChildAt(this.bg, 0);

        this.comboManager = new ComboManager();
        this.vault = new Vault(this.app, this.comboManager);

        this.onResize();

        window.addEventListener('resize', () => this.onResize());
    }


    private onResize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        const screen = this.app.screen;
        const texture = this.bg.texture;

        const scale = Math.max(
            screen.width / texture.width,
            screen.height / texture.height
        );

        this.bg.scale.set(scale);

        this.bg.x = (screen.width - this.bg.width) / 2;
        this.bg.y = (screen.height - this.bg.height) / 2;

        this.vault.x = this.bg.x + this.bg.width * 0.5;
        this.vault.y = this.bg.y + this.bg.height * 0.5;
    }
}