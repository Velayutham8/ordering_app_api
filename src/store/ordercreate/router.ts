import express from 'express';
import { orderCreate } from './middleware';

const router = express.Router();

router.use(/* reqDataValidation,  */ orderCreate);

export default router;
