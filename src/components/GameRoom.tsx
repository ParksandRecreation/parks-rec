import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import { parkInfo } from '../../parkData';
import { Timer } from '../components/Timer';

interface Park {
  parkName?: string;
  images?: string[];
}
const fallbackImageUrl =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmorethanjustparks.com%2Flist-of-national-parks-by-state%2F&psig=AOvVaw3WxY_SMztkVJbwPi8e_kiW&ust=1686242208103000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODxr_LLsf8CFQAAAAAdAAAAABAE';
const GameRoom = () => {
  const [currentPark, setCurrentPark] = useState<Park | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    displayPark();
  }, []);

  //randomly choose which park to display
  const displayPark = (): void => {
    const correctPark =
      parkInfo[Math.floor(Math.random() * parkInfo.length)];
    setCurrentPark(correctPark);

    //get other options
    // const multipleChoice: any[] = shuffle([
    //   currentPark?.parkName,
    //   parkInfo.map((park: Park) => park.parkName),
    // ]);

    // Get other options
    const otherParks = parkInfo.filter(
      (park: Park) => park !== correctPark
    );
    const otherParkNames = shuffle(
      otherParks.map((park: Park) => park.parkName)
    );

    // Construct the multiple choice array with the correct park and other park names
    const multipleChoice: string[] = shuffle([
      correctPark.parkName,
      ...otherParkNames.slice(0, 3), // Take the first 3 other park names
    ]);
    //
    setOptions(multipleChoice);
  };

  //helper function to shuffle the choices
  const shuffle = (array: any[]): any[] => {
    for (let i: number = array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="counter">
          <Timer />
        </div>

         <div className="gameRoomContainer">
          <h2>Guess the National Park...</h2>
          {currentPark?.images &&
            currentPark?.images.length > 0 && ( // Added check for currentPark.images
              <div className="imageContainer">
                <img
                  className="park_image"
                  src={currentPark?.images[0] || fallbackImageUrl}
                  alt={currentPark.parkName}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            )}
          <div className="btnContainer">
            {options.map((options: string, index: number) => (
              <button key={index}>{options}</button>
            ))}
          </div>
        </div>

        <div className="playerMainContainer">
          <div className="playerContainer">
            <span>Player 1</span>
            <span className="score1">100</span>
          </div>
          <div className="playerContainer">
            <span>Player 2</span>
            <span className="score2">200</span>
          </div>
        </div>

      </div>

        <img className="gr_img tree1" src={tree} />
        <img className="gr_img tree2" src={tree} />
        <img className="gr_img" src={tree} />
        <img className="gr_img tree4" src={tree} />
        <img className="gr_img tree5" src={tree} />
        <img className="gr_img camper" src={camper} />
      {/* </div> */}
    </>
  );
};
export default GameRoom;
