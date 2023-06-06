import express, { Request, Response, Router } from 'express';
import loginController from '../controllers/loginController';
// const express = require('express');
// const getUserData = require('../controllers/loginController');

const router: any = express.Router();

router.get('/userData', (req: any, res: any) => {
  const accessToken = req.query.accessToken;
  loginController
    .getUserData(accessToken as string)
    .then((res: any) => res.json(res));
});

module.exports = router;
