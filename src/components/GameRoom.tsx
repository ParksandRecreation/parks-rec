import React from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import sample from '../assets/sample.jpg';


const GameRoom = () => {


return(
    <>

     <Navbar />
     <div className = "mainContainer">
    <div className="counter">
        <span>00:00</span>
    </div>
      <div className="gameRoomContainer">
        <h2>Guess the National Park...</h2>
        <div className="imageContainer">
        {/* Insert Image here */}
        <img className="park_image" src={sample}/>
        </div>
        <div className = "btnContainer">
            <button>Yellowstone National Park</button>
            <button>Acadia National Park</button>
        </div>
        <div className = "btnContainer">
            <button>Yosemite National Park</button>
            <button>Grand Canyon National Park</button>
        </div>
      </div>
      <div className = 'playerMainContainer'>
        <div className='playerContainer'>
        <span>Player 1</span>
        <span className='score1'>100</span>
        </div>
        <div className='playerContainer'>
        <span>Player 2</span>
        <span className='score2'>200</span>
        </div>
      </div>


     </div>
     
    <img className="gr_img tree1" src={tree}/>
    <img className="gr_img tree2" src={tree}/>
    <img className="gr_img" src={tree}/>
    <img className="gr_img tree4" src={tree}/>
    <img className="gr_img tree5" src={tree}/>
    <img className="gr_img camper" src={camper}/>
    
    </>
   
)



}

export default GameRoom;