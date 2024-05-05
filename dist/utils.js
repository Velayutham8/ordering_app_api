"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitialFoodAppData = exports.ORDERCOLLECTION = exports.PRODUCTSCOLLECTION = exports.CATEGORIESCOLLECTION = exports.FOODSTORESCOLLECTION = void 0;
const mongodb_1 = require("./db/mongodb");
const staticdata_1 = require("./staticdata");
exports.FOODSTORESCOLLECTION = 'FoodStores';
exports.CATEGORIESCOLLECTION = 'Categories';
exports.PRODUCTSCOLLECTION = 'Products';
exports.ORDERCOLLECTION = 'Orders';
const createInitialFoodAppData = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, mongodb_1.getMongodb)();
    const storeDocumentCount = yield db
        .collection(exports.FOODSTORESCOLLECTION)
        .countDocuments({});
    if (!storeDocumentCount) {
        yield db.collection(exports.FOODSTORESCOLLECTION).insertMany(staticdata_1.foodStore);
    }
    const categoriesDocumentCount = yield db
        .collection(exports.CATEGORIESCOLLECTION)
        .countDocuments({});
    if (!categoriesDocumentCount) {
        yield db.collection(exports.CATEGORIESCOLLECTION).insertMany(staticdata_1.categories);
    }
    const productDocumentCount = yield db
        .collection(exports.PRODUCTSCOLLECTION)
        .countDocuments({});
    if (!productDocumentCount) {
        yield db.collection(exports.PRODUCTSCOLLECTION).insertMany(staticdata_1.products);
    }
    return;
});
exports.createInitialFoodAppData = createInitialFoodAppData;
