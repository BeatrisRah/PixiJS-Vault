import { Application, Container, type Sprite } from "pixi.js";
import { AssetLoader } from "../Assets";
import { gsap } from 'gsap';


export class Treasure extends Container {
    sparkles: Sprite[]
    count_sparkels: number = 3
    app: Application

    constructor(app: Application) {
        super()
        this.sparkles = [];
        this.app = app
    }


    public createSparkles() {
        for (let i = 0; i < this.count_sparkels; i++) {
            const sparkle = AssetLoader.getSprite('sparkle')
            sparkle.anchor.set(0.5);
            sparkle.scale.set(0.3 + Math.random() * 0.3);
            sparkle.alpha = 0;

            const treasureCenterX = this.app.screen.width / 2;
            const treasureCenterY = this.app.screen.height / 2 + 80;

            const spreadX = 200;
            const spreadY = 80;

            sparkle.x = treasureCenterX + (Math.random() - 0.5) * spreadX;
            sparkle.y = treasureCenterY + (Math.random() - 0.5) * spreadY;

            this.app.stage.addChild(sparkle);
            this.sparkles.push(sparkle);

            this.animateSparkle(sparkle);
        }
    }

    animateSparkle(sparkle: Sprite) {
        const delay = Math.random() * 2;

        gsap.to(sparkle, {
            alpha: 1,
            duration: 0.3,
            delay,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            onStart: () => {
                gsap.to(sparkle.scale, {
                    x: sparkle.scale.x * 1.3,
                    y: sparkle.scale.y * 1.3,
                    duration: 0.3,
                    yoyo: true,
                    repeat: -1,
                    delay,
                    ease: 'sine.inOut',
                });
            },
        });
    }


}