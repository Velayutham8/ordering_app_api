import express from 'express';
import { getCategoryList, reqDataValidation } from './middleware';

const router = express.Router();

router.use(reqDataValidation, getCategoryList);

export default router;
