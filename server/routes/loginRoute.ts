import express, { Request, Response, Router } from 'express';
// import { getUserData } from '../controllers/loginController';
import loginController from '../controllers/loginController';

const loginRoute: any = Router();

loginRoute.get(
  '/oauth',
  loginController.getUserData,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.userInfo);
  }
);

// loginRoute.get('/oauth', (req: Request, res: Response) => {
//   // const accessToken = req.query.accessToken;
//   const accessToken =
//     '143680018728-1fb574qfkojddts9msssul16a7jo6kjc.apps.googleusercontent.com';
//   console.log('accessToken ', accessToken);
//   getUserData(accessToken as string).then((res: any) =>
//     res.status(200).json(res)
//   );
// });

loginRoute.get('/', (req: Request, res: Response) => {
  res.status(200).send('login');
});

export default loginRoute;
