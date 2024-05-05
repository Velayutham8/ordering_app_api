"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./list/router"));
const router_2 = __importDefault(require("./categorylist/router"));
const router_3 = __importDefault(require("./productlist/router"));
const router_4 = __importDefault(require("./ordercreate/router"));
const router_5 = __importDefault(require("./orderlist/router"));
const router_6 = __importDefault(require("./orderbyid/router"));
const router = express_1.default.Router();
//All store routes are here
router.get('/store/list', router_1.default);
router.get('/category/list', router_2.default);
router.get('/product/list', router_3.default);
router.post('/order/create', router_4.default);
router.get('/order/byid', router_6.default);
router.get('/order/list', router_5.default);
exports.default = router;
