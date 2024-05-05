import { NextFunction, Request, Response } from 'express';
import { getMongodb } from '../../db/mongodb';
import { FOODSTORESCOLLECTION } from '../../utils';
import { Db } from 'mongodb';

export const getStoreList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const db: Db = await getMongodb();

  const storeList = await db
    .collection(FOODSTORESCOLLECTION)
    .find({}, { projection: { _id: 0 } })
    .toArray();

  res
    .status(200)
    .json({ status: 200, data: storeList, documentCount: storeList.length });
  return;
};
