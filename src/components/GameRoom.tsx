import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';
import { parkInfo } from '../../parkData';

interface Park {
  parkName: string;
  images: string[];
}

const GameRoom = () => {
  const [currentPark, setCurrentPark] = useState<Park | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    displayPark();
  }, []);

  //randomly choose which park to display
  const displayPark = (): void => {
    const correctPark = parkInfo[Math.floor(Math.random() * parkInfo.length)];
    setCurrentPark(correctPark);

    //get other options
    const multipleChoice: any[] = shuffle([
      currentPark.parkName,
      parkInfo.map((park: Park) => park.parkName),
    ]);
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
      <div className="gameRoomContainer">
        <h2>Guess the National Park...</h2>
        {currentPark && (
          <div className="imageContainer">
            <img src={currentPark.images[0]} alt={currentPark.parkName} />
          </div>
        )}
        <div className="btnContainer">
          {options.map((options: string, index: number) => (
            <button key={index}>{options}</button>
          ))}
          {/* <button>Yellowstone National Park</button>
          <button>Acadia National Park</button> */}
        </div>
        <div className="btnContainer">
          {/* <button>Yosemite National Park</button>
          <button>Grand Canyon National Park</button> */}
        </div>
      </div>
      <img className="gr_img tree1" src={tree} />
      <img className="gr_img tree2" src={tree} />
      <img className="gr_img" src={tree} />
      <img className="gr_img tree4" src={tree} />
      <img className="gr_img tree5" src={tree} />
      <img className="gr_img camper" src={camper} />
    </>
  );
};
export default GameRoom;
