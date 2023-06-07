import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

type callback = (error: Error, result: QueryResult) => void;

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

export const db = {
  query: (
    text: string,
    params: (number | string)[],
    callback: callback
  ) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
