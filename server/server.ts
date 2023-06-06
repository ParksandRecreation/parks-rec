import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8080'
  }
});

const PORT: number = 3000;

// parse both JSON and URL-encoded form data from React app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// express global error handler


server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});