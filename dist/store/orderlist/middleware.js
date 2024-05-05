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
exports.getOrderList = void 0;
const mongodb_1 = require("../../db/mongodb");
const utils_1 = require("../../utils");
const getOrderList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, mongodb_1.getMongodb)();
    const orderList = yield db
        .collection(utils_1.ORDERCOLLECTION)
        .find({}, { projection: { _id: 0 } })
        .toArray();
    res.status(200).json({
        status: 200,
        data: orderList,
        documentCount: orderList.length,
    });
    return;
});
exports.getOrderList = getOrderList;
