import React from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';

const HomePage = () => {

 return (
    <>
        <Navbar/>
        <div className='homepageContainer'>
            <form>
                <h2>Welcome, username</h2>
                <h4>Enter or Create Room ID to Join the Game</h4>
                <input placeholder='Room ID' />
                <div className='btns'>
                    <button className='btn1'>Create Room</button>
                    <button className='btn2'>Join Room</button>
                </div>               
            </form>
        </div>
        <img className="img tree1" src={tree}/>
        <img className="img tree2" src={tree}/>
        <img className="img" src={tree}/>
        <img className="img tree4" src={tree}/>
        <img className="img tree5" src={tree}/>
        <img className="img camper" src={camper}/>
    </>
 )

}

export default HomePage;