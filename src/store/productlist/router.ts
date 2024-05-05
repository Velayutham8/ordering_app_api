import express from 'express';
import { getProductList, reqDataValidation } from './middleware';

const router = express.Router();

router.use(reqDataValidation, getProductList);

export default router;
