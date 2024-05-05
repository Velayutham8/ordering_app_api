import express from 'express';
import cors from 'cors';
import approutes from './app.routes';
import { createInitialFoodAppData } from './utils';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 10500;

app.use(cors());
app.use(express.json());

const router = express.Router();

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
  return;
});

app.listen(port, () => {
  createInitialFoodAppData(); //Creates required initial data

  console.log(`Example app listening on port ${port}`);
});

router.use(approutes);
