import { Sprite } from "pixi.js";
import { AssetLoader } from "../Assets";

export class Handle{
    handle: Sprite;
    handle_shadow: Sprite

    constructor(door: Sprite){
        this.handle_shadow = AssetLoader.getSprite('handle_shadow')
        this.handle_shadow.anchor.set(0.5)
        this.handle_shadow.x = -70
        this.handle_shadow.y = 50
        door.addChild(this.handle_shadow)

        this.handle = AssetLoader.getSprite('handle')
        this.handle.anchor.set(0.5)
        this.handle.x = -90
        this.handle.interactive = true;
        door.addChild(this.handle)

        this.handle.cursor = 'pointer'
    }
}