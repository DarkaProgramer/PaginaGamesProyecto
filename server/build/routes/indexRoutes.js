"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontrollers_1 = require("../controllers/indexcontrollers");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, resp) => resp.send('Hello'));
        this.router.get('/', indexcontrollers_1.indexController.index);
    }
}
const indexRoutes = new IndexRouter();
exports.default = indexRoutes.router;
