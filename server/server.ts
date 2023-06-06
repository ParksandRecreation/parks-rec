import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8080'
  }
});

app.set('io', io);

const PORT: number = 3000;

// parse both JSON and URL-encoded form data from React app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

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