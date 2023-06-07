import { express } from '../server-types';
const router = express.Router();
import roomController from '../controllers/roomController';

// create room
router.post('/create/:room',
  roomController.createRoom,
  (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;