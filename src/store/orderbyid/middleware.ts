import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from '../../db/mongodb';
import { ORDERCOLLECTION } from '../../utils';

export const reqDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orderid } = req.query;

  if (!orderid) {
    res.status(400).json({ status: 400, data: 'Order id is required' });
    return;
  }

  next();
  return;
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orderid } = req.query;

  const db: Db = await getMongodb();

  const order = await db
    .collection(ORDERCOLLECTION)
    .findOne({ orderid }, { projection: { _id: 0 } });

  if (!order) {
    res.status(400).json({
      status: 400,
      data: 'Order not found',
      documentCount: 0,
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: order,
    documentCount: 1,
  });
  return;
};
