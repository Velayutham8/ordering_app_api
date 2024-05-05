import express from 'express';
import storeListRouter from './list/router';
import categoryListRouter from './categorylist/router';
import productListRouter from './productlist/router';
import orderCreateRouter from './ordercreate/router';
import orderListRouter from './orderlist/router';
import orderByIdRouter from './orderbyid/router';

const router = express.Router();

//All store routes are here

router.get('/store/list', storeListRouter);
router.get('/category/list', categoryListRouter);
router.get('/product/list', productListRouter);
router.post('/order/create', orderCreateRouter);
router.get('/order/byid', orderByIdRouter);
router.get('/order/list', orderListRouter);

export default router;
