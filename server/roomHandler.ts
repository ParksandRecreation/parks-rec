// client will emit an object with username and roomName
type Payload = {
  username: string,
  roomName: string
}

// use any type for now
const roomHandler = (io: any, socket: any, rooms: any) => {
  const create = (payload: Payload): void => {
    // if room already exists, emit failure event
    if (rooms.hasOwnProperty(payload.roomName)) {
      socket.emit('createFailed', payload.roomName);
      return socket.disconnect();
    }
    // if room doesn't exist, create and join room and emit success event
    socket.join(payload.roomName);
    rooms[payload.roomName] = {
      players: {
        [payload.username]: 0
      }
    }
    socket.emit('roomCreated', payload.roomName);
  }

  const join = (payload: Payload): void => {
    // if room doesn't exist or there are already 2 players, emit failure event
    if (!rooms.hasOwnProperty(payload.roomName) || Object.keys(rooms[payload.roomName]).length === 2) {
      socket.emit('joinFailed', payload.roomName); 
      return socket.disconnect();
    }
    // if room exists, join room and emit success event
    socket.join(payload.roomName);
    rooms[payload.roomName].players[payload.username] = 0
    socket.emit('roomJoined', payload.roomName);
  }

  socket.on('createRoom', create);
  socket.on('joinRoom', join);
}

export default roomHandler;