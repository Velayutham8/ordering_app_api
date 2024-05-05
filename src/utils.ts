import { NextFunction, Request, Response } from 'express';
import { Db } from 'mongodb';
import { getMongodb } from './db/mongodb';
import { categories, foodStore, products } from './staticdata';

export const FOODSTORESCOLLECTION = 'FoodStores';
export const CATEGORIESCOLLECTION = 'Categories';
export const PRODUCTSCOLLECTION = 'Products';
export const ORDERCOLLECTION = 'Orders';

export const createInitialFoodAppData = async () => {
  const db: Db = await getMongodb();

  const storeDocumentCount = await db
    .collection(FOODSTORESCOLLECTION)
    .countDocuments({});

  if (!storeDocumentCount) {
    await db.collection(FOODSTORESCOLLECTION).insertMany(foodStore);
  }

  const categoriesDocumentCount = await db
    .collection(CATEGORIESCOLLECTION)
    .countDocuments({});

  if (!categoriesDocumentCount) {
    await db.collection(CATEGORIESCOLLECTION).insertMany(categories);
  }

  const productDocumentCount = await db
    .collection(PRODUCTSCOLLECTION)
    .countDocuments({});

  if (!productDocumentCount) {
    await db.collection(PRODUCTSCOLLECTION).insertMany(products);
  }
  return;
};
