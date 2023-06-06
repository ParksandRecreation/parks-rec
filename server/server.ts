import path from 'path';
import socket from 'socket.io';
import http from 'http';
import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
// const path = require('path');
// const socket = require('socket.io');
// const http = require('http');
// const express = require('express');
const app = express();
const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: {
    origin: 'http://localhost:8080',
  },
});
const loginRoute = require('./routes/loginRoute');

const PORT: number = 3000;

// parse both JSON and URL-encoded form data from React app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// serve index.html
app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// oath route
app.use('/login', loginRoute);

// express global error handler (use any for error type until we define custom error type later)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
