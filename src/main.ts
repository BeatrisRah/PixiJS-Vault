import { Application} from 'pixi.js';
import { AssetLoader } from './Assets';
import { Game } from './objects/Game';

(async () =>
  {
    await AssetLoader.loadAll()

    const app = new Application();

    await app.init({resizeTo: window });

    document.body.appendChild(app.canvas);
    
    new Game(app)
  
      
  })();