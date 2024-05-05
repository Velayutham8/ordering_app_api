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
exports.getOrderById = exports.reqDataValidation = void 0;
const mongodb_1 = require("../../db/mongodb");
const utils_1 = require("../../utils");
const reqDataValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderid } = req.query;
    if (!orderid) {
        res.status(400).json({ status: 400, data: 'Order id is required' });
        return;
    }
    next();
    return;
});
exports.reqDataValidation = reqDataValidation;
const getOrderById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderid } = req.query;
    const db = yield (0, mongodb_1.getMongodb)();
    const order = yield db
        .collection(utils_1.ORDERCOLLECTION)
        .findOne({ orderid }, { projection: { _id: 0 } });
    if (!order) {
        res.status(400).json({
            status: 400,
            data: 'Order not found',
            documentCount: 0,
        });
        return;
    }
    res.status(200).json({
        status: 200,
        data: order,
        documentCount: 1,
    });
    return;
});
exports.getOrderById = getOrderById;
