// client will emit an object with username and roomName
type payload = {
  username: string,
  roomName: string
}

const roomHandler = (io, socket, rooms) => {
  const create = (payload: payload): void => {
    // if room already exists, emit failure event
    if (rooms.hasOwnProperty(payload.roomName)) return socket.emit('createFailed', payload.roomName);
    // if room doesn't exist, create and join room and emit success event
    socket.join(payload.roomName);
    rooms[payload.roomName] = {
      players: {
        [payload.username]: 0
      }
    }
    socket.emit('roomCreated', payload.roomName);
  }

  const join = (payload: payload): void => {
    // if room doesn't exist or there are already 2 players, emit failure event
    if (!rooms.hasOwnProperty(payload.roomName) || Object.keys(rooms[payload.roomName]).length === 2) {
      return socket.emit('joinFailed', payload.roomName); 
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