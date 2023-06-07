import React from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleCreateRoomBtn = () => {
    navigate('/room');
  };
  const userName = localStorage.getItem('given_name') || 'friend'; // need to trigger re-render when user log in
  const pic =
    localStorage.getItem('picture') ||
    'https://avatars.githubusercontent.com/u/135664949?s=400&v=4';
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
