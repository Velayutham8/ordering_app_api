"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.orderCreate = exports.reqDataValidation = void 0;
const mongodb_1 = require("../../db/mongodb");
const utils_1 = require("../../utils");
const uuid = __importStar(require("uuid"));
const reqDataValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { storeid } = req.query;
    if (!storeid) {
        res.status(400).json({ status: 400, data: 'Store id is required' });
        return;
    }
    next();
    return;
});
exports.reqDataValidation = reqDataValidation;
const orderCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orders, totalitems, totalprice, storename } = req.body;
    console.warn('reqdata', { orders, totalitems, totalprice, storename });
    const db = yield (0, mongodb_1.getMongodb)();
    yield db.collection(utils_1.ORDERCOLLECTION).insertOne({
        orderid: uuid.v4(),
        orderedat: new Date(),
        totalitems,
        orders,
        totalprice,
        storename,
    });
    res.status(201).json({
        status: 201,
        data: 'Order placed',
    });
    return;
});
exports.orderCreate = orderCreate;
