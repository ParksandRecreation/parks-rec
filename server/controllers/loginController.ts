import * as dotenv from 'dotenv';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
dotenv.config();

const loginController: any = {};
loginController.getUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.query.accessToken;
  // console.log('accessToken: ', accessToken);
  try {
    const { data } = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log('data, ', data);
    res.locals.userInfo = data;
    return next();
  } catch (err) {
    return next({
      log: `loginController.getUserData: ${err}`,
      message: { err: `Error with OAuth: ${err}` },
    });
  }
};

export default loginController;
