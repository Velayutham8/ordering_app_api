import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from '../../db/mongodb';
import { CATEGORIESCOLLECTION, PRODUCTSCOLLECTION } from '../../utils';

export const reqDataValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryid } = req.query;

  if (!categoryid) {
    res.status(400).json({ status: 400, data: 'Category id is required' });
    return;
  }

  next();
  return;
};

export const getProductList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryid } = req.query;

  const db: Db = await getMongodb();

  const productList = await db
    .collection(PRODUCTSCOLLECTION)
    .find({ categoryid }, { projection: { _id: 0 } })
    .toArray();

  res.status(200).json({
    status: 200,
    data: productList,
    documentCount: productList.length,
  });
  return;
};
