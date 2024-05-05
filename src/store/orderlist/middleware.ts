import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from '../../db/mongodb';
import { ORDERCOLLECTION } from '../../utils';

export const getOrderList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const db: Db = await getMongodb();

  const orderList = await db
    .collection(ORDERCOLLECTION)
    .find({}, { projection: { _id: 0 } })
    .toArray();

  res.status(200).json({
    status: 200,
    data: orderList,
    documentCount: orderList.length,
  });
  return;
};
