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
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.categories = exports.foodStore = void 0;
const uuid = __importStar(require("uuid"));
const storeid1 = uuid.v4();
const storeid2 = uuid.v4();
const storeid3 = uuid.v4();
const storeid4 = uuid.v4();
exports.foodStore = [
    {
        storeid: storeid1,
        storename: 'Junior Kuppuna',
        varities: 206,
    },
    {
        storeid: storeid2,
        storename: 'Saravana Bhavan',
        varities: 349,
    },
    {
        storeid: storeid3,
        storename: 'PriyaHotel',
        varities: 123,
    },
    {
        storeid: storeid4,
        storename: 'VelayuthamHotel',
        varities: 480,
    },
];
const categoryid1 = uuid.v4();
const categoryid2 = uuid.v4();
const categoryid3 = uuid.v4();
const categoryid4 = uuid.v4();
exports.categories = [
    {
        storeid: storeid1,
        categoryid: categoryid1,
        category: 'Dhosai Mix',
    },
    {
        storeid: storeid1,
        categoryid: categoryid2,
        category: 'Idli Mix',
    },
    {
        storeid: storeid1,
        categoryid: categoryid3,
        category: 'Flour',
    },
    {
        storeid: storeid1,
        categoryid: categoryid4,
        category: 'Kolukattai Maavu',
    },
    {
        storeid: storeid2,
        categoryid: categoryid1,
        category: 'Dhosai Mix',
    },
    {
        storeid: storeid2,
        categoryid: categoryid2,
        category: 'Idli Mix',
    },
    {
        storeid: storeid2,
        categoryid: categoryid3,
        category: 'Mavu',
    },
    {
        storeid: storeid2,
        categoryid: categoryid4,
        category: 'Kolukattai Maavu',
    },
    {
        storeid: storeid3,
        categoryid: categoryid1,
        category: 'Dhosai Mix',
    },
    {
        storeid: storeid3,
        categoryid: categoryid2,
        category: 'Idli Mix',
    },
    {
        storeid: storeid3,
        categoryid: categoryid3,
        category: 'Mavu',
    },
    {
        storeid: storeid3,
        categoryid: categoryid4,
        category: 'Kolukattai Maavu',
    },
    {
        storeid: storeid4,
        categoryid: categoryid1,
        category: 'Dhosai Mix',
    },
    {
        storeid: storeid4,
        categoryid: categoryid2,
        category: 'Idli Mix',
    },
    {
        storeid: storeid4,
        categoryid: categoryid3,
        category: 'Mavu',
    },
    {
        storeid: storeid4,
        categoryid: categoryid4,
        category: 'Kolukattai Maavu',
    },
];
exports.products = [
    {
        categoryid: categoryid1,
        productid: uuid.v4(),
        productname: 'Rava Dosai Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid1,
        productid: uuid.v4(),
        productname: 'SPL Rava Dosai Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid1,
        productid: uuid.v4(),
        productname: 'Ragi Dosai Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid1,
        productid: uuid.v4(),
        productname: 'Multi Millet Dosa Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid2,
        productid: uuid.v4(),
        productname: 'Ragi Idli Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid2,
        productid: uuid.v4(),
        productname: 'Rava Idli Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid2,
        productid: uuid.v4(),
        productname: 'Rice Idli Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid2,
        productid: uuid.v4(),
        productname: 'Oats Idli Mix',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid3,
        productid: uuid.v4(),
        productname: 'Ragi Flour',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid3,
        productid: uuid.v4(),
        productname: 'Millet Flour',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid3,
        productid: uuid.v4(),
        productname: 'Rice Flour',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid3,
        productid: uuid.v4(),
        productname: 'Wheat Flour',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid4,
        productid: uuid.v4(),
        productname: 'Ellu Kolukattai Maavu',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid4,
        productid: uuid.v4(),
        productname: 'Rice Kolukattai Maavu',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid4,
        productid: uuid.v4(),
        productname: 'Ragi Kolukattai Maavu',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
    {
        categoryid: categoryid4,
        productid: uuid.v4(),
        productname: 'Wheat Kolukattai Maavu',
        size: '200gm',
        price: 300,
        previousorderedqty: 0,
    },
];
