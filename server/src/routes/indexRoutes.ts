import { Router } from "express";
import { indexController } from "../controllers/indexcontrollers";

class IndexRouter {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, resp) => resp.send('Hello'));
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRouter();
export default indexRoutes.router;
