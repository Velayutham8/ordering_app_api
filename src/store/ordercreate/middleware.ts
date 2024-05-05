import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from '../../db/mongodb';
import { ORDERCOLLECTION } from '../../utils';
import * as uuid from 'uuid';

export const reqDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { storeid } = req.query;

  if (!storeid) {
    res.status(400).json({ status: 400, data: 'Store id is required' });
    return;
  }

  next();
  return;
};

export const orderCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orders, totalitems, totalprice, storename } = req.body;

  console.warn('reqdata', { orders, totalitems, totalprice, storename });

  const db: Db = await getMongodb();

  await db.collection(ORDERCOLLECTION).insertOne({
    orderid: uuid.v4(),
    orderedat: new Date(),
    totalitems,
    orders,
    totalprice,
    storename,
  });

  res.status(201).json({
    status: 201,
    data: 'Order placed',
  });
  return;
};
