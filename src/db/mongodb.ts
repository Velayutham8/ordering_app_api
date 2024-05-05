// const mongodb = require("mongodb");

// const { MongoClient } = require('mongodb');

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let url: string;

console.warn('process.env', process.env['NODE_ENV']);

if (process.env['NODE_ENV']?.trim() === 'production') {
  url = process.env['PRODUCTION_MONGO_URL'] as string;
} else {
  url = process.env['MONGO_URL'] as string;
}
// console.log('url', process.env);

const client = new MongoClient(url);

export const getMongodb = async () => {
  //   console.log("client connect", client);

  const mongodb = await client.connect();

  //   console.log("db", db);

  return mongodb.db();
  //   return db;
};
