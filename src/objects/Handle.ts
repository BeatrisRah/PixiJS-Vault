import { Sprite } from "pixi.js";
import { AssetLoader } from "../Assets";
import type { Direction } from "../types/directionType";
import { gsap } from 'gsap';

export class Handle{
    handle: Sprite;
    handle_shadow: Sprite;
    onRotate!: (steps: number, dir: Direction) => void;

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
        this.handle.on('pointerdown',(e:PointerEvent) => this.OnClick(e) )

        
    }
    private OnClick(e: PointerEvent) {
        const isLeft = e.clientX < window.innerWidth / 2;
        const dir = isLeft ? 'counterclockwise' : 'clockwise';
        this.rotateHandle(1, dir);
        if (this.onRotate) this.onRotate(1, dir);
    }

    public rotateHandle(steps: number, dir: 'clockwise' | 'counterclockwise') {
        const delta = (Math.PI / 3) * steps * (dir === 'clockwise' ? 1 : -1);
        const target = this.handle.rotation + delta;
        const target_shadow = this.handle_shadow.rotation + delta
    
        gsap.to(this.handle, {
            rotation: target,
            duration: 0.5,
            ease: 'power2.out',
        });

        gsap.to(this.handle_shadow, {
            rotation: target_shadow,
            duration: 0.5,
            ease: 'power2.out',
        })
    }

    public spinCrazy() {
        gsap.to(this.handle, {
            rotation: this.handle.rotation + Math.PI * 6,
            duration: 1.5,
            ease: 'power4.inOut',
        });

        gsap.to(this.handle_shadow, {
            rotation: this.handle_shadow.rotation + Math.PI * 6,
            duration: 1.5,
            ease: 'power4.inOut',
        })
    }
}