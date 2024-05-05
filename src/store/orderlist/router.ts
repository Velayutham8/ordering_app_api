import express from 'express';
import { getOrderList } from './middleware';

const router = express.Router();

router.use(getOrderList);

export default router;
