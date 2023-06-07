import { db } from '../dbModels';
import { Request, Response, NextFunction } from 'express';
// dotenv.config();

const userController: any = {};

userController.updateDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { given_name, sub } = res.locals.userInfo;
  try {
    const findUser = `SELECT * FROM users WHERE user_id = $1`;
    db.query(findUser, [sub], (err, data) => {
      // console.log('found user: ', data);

      // if user already exists in db, continue
      if (data !== undefined) return next();
      // if user does not exist in db, create user
      const createUser = `INSERT INTO users (user_id, username) VALUES ($1, $2)`;
      db.query(createUser, [sub, given_name], (err, result) => {
        // console.log('after added user', result);
      });
      next();
    });
  } catch (err) {
    return next({
      log: 'userController.updateDB',
      message: {
        err: `ERROR finding user ${given_name} in database: ${err}`,
      },
    });
  }
};

export default userController;
