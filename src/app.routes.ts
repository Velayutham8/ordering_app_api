import express from 'express';
import storeRouter from './store/routes';

const router = express.Router();

router.use('/api', storeRouter);

export default router;
