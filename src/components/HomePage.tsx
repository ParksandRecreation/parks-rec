import React, { useRef } from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import { useNavigate, useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const HomePage = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const handleCreateRoomBtn = () => {
        const username: string | null = location.state?.username || null;
        const roomName: string | null = inputRef.current?.value || null;
        console.log('roomName: ', roomName);

        const socket = io('http://localhost:3000');
        socket.emit('createRoom', { username, roomName });
        socket.on('roomCreated', roomName => {
            console.log('Successfully created room: ', roomName);
            navigate(`/room/${roomName}`, { state: { username: 'test' }});
        });

        socket.on('createFailed', roomName => {
            console.log('That room is already taken!');
            if (inputRef.current) inputRef.current.value = '';
        })
        
    };

    const handleJoinRoomBtn = () => {
        const username: string | null = location.state?.username || null;
        const roomName: string | null = inputRef.current?.value || null;
        console.log('roomName: ', roomName);

        const socket = io('http://localhost:3000');
        socket.emit('joinRoom', { username, roomName });
        socket.on('roomJoined', roomName => {
            console.log('Successfully joined room: ', roomName);
            navigate(`/room/${roomName}`, { state: { username: 'test' }});
        });

        socket.on('joinFailed', roomName => {
            console.log('That room is already full!');
            if (inputRef.current) inputRef.current.value = '';
        })
    };

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
          <input placeholder="Room ID" />
          <div className="btns">
            <button className="btn1" onClick={() => handleCreateRoomBtn()}>
              Create Room
            </button>
            <button className="btn2" onClick={() => handleCreateRoomBtn()}>
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
