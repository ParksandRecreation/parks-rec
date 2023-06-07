import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';

const GameRoom = () => {


return(
    <>

     <Navbar />
     <div className="gameRoomContainer">
        <h2>Guess the National Park...</h2>
        <div className="imageContainer">

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