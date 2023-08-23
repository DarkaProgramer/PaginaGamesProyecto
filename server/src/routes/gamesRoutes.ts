import { Router } from "express";
import gamesController from '../controllers/gamesControllers';

class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, resp) => resp.send('Hello Games'));
		this.router.get('/ ', gamesController.list);
        this.router.post('/', gamesController.create);
        this.router.delete('/ : id', gamesController.delete);
        this.router.put('/ : id', gamesController.update);  
        this.router.get('/ :id', gamesController.getOne);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
