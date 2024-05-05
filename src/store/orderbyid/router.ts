import express from 'express';
import { getOrderById, reqDataValidation } from './middleware';

const router = express.Router();

router.use(reqDataValidation, getOrderById);

export default router;
