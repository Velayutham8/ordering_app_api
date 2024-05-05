import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from '../../db/mongodb';
import { CATEGORIESCOLLECTION } from '../../utils';

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

export const getCategoryList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { storeid } = req.query;

  const db: Db = await getMongodb();

  console.warn('storeid', storeid);

  const categoryList = await db
    .collection(CATEGORIESCOLLECTION)
    .find({ storeid }, { projection: { _id: 0 } })
    .toArray();

  res.status(200).json({
    status: 200,
    data: categoryList,
    documentCount: categoryList.length,
  });
  return;
};
