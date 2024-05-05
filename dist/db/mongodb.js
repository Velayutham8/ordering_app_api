"use strict";
// const mongodb = require("mongodb");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongodb = void 0;
// const { MongoClient } = require('mongodb');
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let url = 'mongodb+srv://Velayuthamwd:YacAF3ctXYURXm9b@foodorderingapp.1zm14hp.mongodb.net/';
// console.warn('process.env', process.env['NODE_ENV']);
// if (process.env['NODE_ENV']?.trim() === 'production') {
//   url = process.env['PRODUCTION_MONGO_URL'] as string;
// } else {
//   url = process.env['MONGO_URL'] as string;
// }
// console.log('url', process.env);
const client = new mongodb_1.MongoClient(url);
const getMongodb = () => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("client connect", client);
    const mongodb = yield client.connect();
    //   console.log("db", db);
    return mongodb.db();
    //   return db;
});
exports.getMongodb = getMongodb;
