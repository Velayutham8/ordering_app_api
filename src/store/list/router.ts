import express from 'express';
import { getStoreList } from './middleware';

const router = express.Router();

router.use(getStoreList);

export default router;
