import { Request, Response, NextFunction } from '../server-types';
import { Server } from 'socket.io';

type roomController = {
  createRoom?: (req: Request, res: Response, next: NextFunction) => void;
}

const roomController: roomController = {
  createRoom: (req, res, next) => {
    const io: Server = req.app.get('io');

    
  }
};

export default roomController;