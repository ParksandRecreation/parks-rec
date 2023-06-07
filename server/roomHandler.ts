// client will emit an object with username and roomName
interface UserRoom {
  userName: string,
  roomName: string
}

interface Park {
  parkName?: string;
  images?: string[];
}

interface UserPark extends Park {
  roomName: string
}

// use any type for now
const roomHandler = (io: any, socket: any, rooms: any) => {
  const create = (payload: UserRoom): void => {
    // if room already exists, emit failure event
    if (rooms.hasOwnProperty(payload.roomName)) {
      socket.emit('createFailed', payload.roomName);
      return socket.disconnect();
    }
    // if room doesn't exist, create and join room and emit success event
    socket.join(payload.roomName);
    // player starts with a score of 0 upon creating room
    rooms[payload.roomName] = {
      players: {
        [payload.userName]: {
          score: 0,
          status: false
        } 
      }
    }
    socket.emit('roomCreated', payload.roomName);
    console.log('rooms: ', rooms);
  };

  const join = (payload: UserRoom): void => {
    // if room doesn't exist or there are already 2 players, emit failure event
    if (!rooms.hasOwnProperty(payload.roomName) || Object.keys(rooms[payload.roomName]).length === 2) {
      socket.emit('joinFailed', payload.roomName); 
      return socket.disconnect();
    }
    // if room exists, join room and emit success event
    socket.join(payload.roomName);
    //player starts with a score of 0 upon joining room
    rooms[payload.roomName].players[payload.userName] = {
      score: 0,
      status: false
    } 
    socket.emit('roomJoined', payload.roomName);
    console.log('rooms: ', rooms);
  };

  const check = (roomName: string) => {
    // emit a true or false event based on room existence
    if (rooms.hasOwnProperty(roomName)) socket.emit('roomExists', true);
    else socket.emit('roomExists', false);
  };
  
  const sendPark = (payload: UserPark) => {
    console.log('parkName: ', payload.parkName);
    io.to(payload.roomName).emit('sendPark', payload.parkName);
  };

  const sendStatus = (payload: UserRoom) => {
    const room = rooms[payload.roomName]; // { players: { Jeffrey: 0 } }
    const players = room.players;
    console.log('players: ', players);
    console.log('player: ', players[payload.userName]);
    players[payload.userName].status = true;
    // if any player has not selected, emit false
    for (let player in players) {
      console.log('key: ', player);
      console.log('status: ', players);
      if (!players[player].status) return socket.emit('newParkStatus', false);
    }
    // if both players have selected, emit true
    socket.emit('newParkStatus', true);
  };

  socket.on('createRoom', create);
  socket.on('joinRoom', join);
  socket.on('checkRoom', check);
  socket.on('newPark', sendPark);
  socket.on('makeSelection', sendStatus);
}

export default roomHandler;