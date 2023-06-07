import React, { useRef } from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import { useNavigate, useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const HomePage = () => {
  const userName = localStorage.getItem('given_name') || 'friend'; // need to trigger re-render when user log in
  const pic =
    localStorage.getItem('picture') ||
    'https://avatars.githubusercontent.com/u/135664949?s=400&v=4';
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const location = useLocation();
  const navigate = useNavigate();
  const handleCreateRoomBtn = () => {
    // const username: string | null = location.state?.username || null;
    const roomName: string | null = inputRef.current?.value || null;
    console.log('roomName: ', roomName);

    // create socket and check if user's inputted room exists
    const socket = io('http://localhost:3000');
    socket.emit('checkRoom', roomName);
    socket.on('roomExists', (status: boolean): void => {
      // if room exists, prompt user to choose new room and display error message
      if (status) {
        console.log('That room is already taken!');
        if (inputRef.current) inputRef.current.value = '';
      } 
      else {
        console.log('Successfully created room: ', roomName);
        navigate(`/room/${roomName}`, { state: { userName, roomName, create: true }});
      }
      socket.disconnect();
    });
    // socket.emit('createRoom', { username, roomName });
    // socket.on('roomCreated', roomName => {
    //     console.log('Successfully created room: ', roomName);
    //     navigate(`/room/${roomName}`, { state: { userName }});
    // });

    // socket.on('createFailed', roomName => {
    //     console.log('That room is already taken!');
    //     if (inputRef.current) inputRef.current.value = '';
    // })
      
  };

  const handleJoinRoomBtn = () => {
    // const username: string | null = location.state?.username || null;
    const roomName: string | null = inputRef.current?.value || null;
    console.log('roomName: ', roomName);

    // create socket and check if user's inputted room exists
    const socket = io('http://localhost:3000');
    socket.emit('checkRoom', roomName);
    socket.on('roomExists', (status: boolean): void => {
      // if room doesn't exist, prompt user enter an existing room and display error message
      if (!status) {
        console.log('That room doesn\'t exist!');
        if (inputRef.current) inputRef.current.value = '';
      } 
      else {
        console.log('Successfully joined room: ', roomName);
        navigate(`/room/${roomName}`, { state: { userName, roomName, create: false }});
      }
      socket.disconnect();
    });
    // socket.emit('joinRoom', { username, roomName });
    // socket.on('roomJoined', roomName => {
    //     console.log('Successfully joined room: ', roomName);
    //     navigate(`/room/${roomName}`, { state: { username: 'test' }});
    // });

    // socket.on('joinFailed', roomName => {
    //     console.log('That room is already full!');
    //     if (inputRef.current) inputRef.current.value = '';
    // })
  };

  // add useEffect hook to create and clean up socket (prevent repetition) if there is time

  return (
    <>
      <Navbar />
      <div className="homepageContainer">
        <form>
          <div className="formHeaderContainer">
            <h2>Welcome, {userName}</h2>
            <img
              className="profile-pic"
              src={pic}
              alt="profile picture"
            ></img>
          </div>

          {/* Not being updated after login */}
          <h4>Enter or Create Room ID to Join the Game</h4>
          <input placeholder="Room ID" ref={inputRef}/>
          <div className="btns">
            <button className="btn1" type='button' onClick={handleCreateRoomBtn}>
              Create Room
            </button>
            <button className="btn2" type='button' onClick={handleJoinRoomBtn}>
              Join Room
            </button>
          </div>
        </form>
      </div>
      <img className="img tree1" src={tree} />
      <img className="img tree2" src={tree} />
      <img className="img" src={tree} />
      <img className="img tree4" src={tree} />
      <img className="img tree5" src={tree} />
      <img className="img camper" src={camper} />
    </>
  );
};

export default HomePage;
