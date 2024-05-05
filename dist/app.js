"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_routes_1 = __importDefault(require("./app.routes"));
const utils_1 = require("./utils");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 10500;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const router = express_1.default.Router();
app.use(router);
app.get('/', (req, res) => {
    res.send('Hello World!');
    return;
});
app.listen(port, () => {
    (0, utils_1.createInitialFoodAppData)(); //Creates required initial data
    console.log(`Example app listening on port ${port}`);
});
router.use(app_routes_1.default);
