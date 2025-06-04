import { Application, Container, Sprite} from 'pixi.js';
import { AssetLoader } from '../Assets';

import type { ComboManager } from './ComboManager';
import { Handle } from './Handle';

export class Vault extends Container {
    app: Application;
    door: Sprite;
    handle: Handle

    comboManager: ComboManager

    constructor(app: Application, comboManager:ComboManager){
        super()
        this.app = app;
        this.comboManager = comboManager

        this.door = AssetLoader.getSprite('door')
        this.door.anchor.set(0.5)
        this.addChild(this.door);
        
        this.handle = new Handle(this.door)

        app.stage.addChild(this)
        this.handle.onRotate = (step, dir) => this.comboManager.checkCombo(step, dir)
        this.onResize()
    }

    onResize(){
        const baseWidth = 1533;
        const baseHeight = 1144;
        const baseScale = 0.39;


        const scaleX = this.app.screen.width / baseWidth;
        const scaleY = this.app.screen.height / baseHeight;
        const scaleFactor = Math.min(scaleX, scaleY);


        const newScale = baseScale * scaleFactor;


        const minScale = 0.2;
        const maxScale = 0.6;
        const clampedScale = Math.min(Math.max(newScale, minScale), maxScale);


        this.x = this.app.screen.width / 2;
        this.y = this.app.screen.height / 2;


        this.door.scale.set(clampedScale);
        
    }

    
}