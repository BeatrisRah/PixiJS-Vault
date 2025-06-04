import { Assets, Sprite} from 'pixi.js';

export class AssetLoader{
    private static bundleName = 'main';

    private static assets: Record<string, string> = {
        background: 'assets/bg.png',
        door: '/assets/door.png',
        handle:'/assets/handle.png',
        handle_shadow:'/assets/handleShadow.png'
    };

    static async loadAll(): Promise<void> {
        Assets.addBundle(this.bundleName, this.assets);
        await Assets.loadBundle(this.bundleName);
    }

    static getSprite(name: keyof typeof AssetLoader.assets): Sprite {
        return Sprite.from(this.assets[name]);
    }
}