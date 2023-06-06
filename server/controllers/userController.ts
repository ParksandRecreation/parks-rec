import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const userController = {};

type callback = (error: Error, result: QueryResult) => void;

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

const db = {
  query: (text: string, params: (number | string)[], callback: callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};




export default userController;