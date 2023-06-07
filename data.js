// import axios from 'axios';
const axios = require('axios');
const fs = require('fs');

const parksArray = ['YELL', 'YOSE', 'YUCH', 'ZION'];

// const fetchParkData = async (parkCodes) => {
//   try {
//     const park = 'yell';
//     const apiKey = 'IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D&limit=100';
//     const response = await fetch(
//       `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${apiKey}`
//     );
//     const data = await response.json();
//     console.log(data);
//     //return data;
//   } catch (error) {
//     console.error('Error fetching park data:', error);
//   }
// };

// console.log(fetchParkData(parks));

const fetchParkData = async () => {
  const parksInfo = [];
  try {
    const result = {};
    const urls = [];
    const parkCode = parksArray;
    const url = 'https://developer.nps.gov/api/v1/parks?';
    const apiKey = 'IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D';
    //https://developer.nps.gov/api/v1/parks?api_key=IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D&parkCode=yose&limit=10

    const response = await axios.get(
      `${url}api_key=${apiKey}&parkCode=${parkCode[1]}`
    );
    const parkData = response.data.data;
    const fullName = parkData[0].fullName;
    const images = parkData[0].images;

    images.forEach((image) => {
      urls.push(image.url);
    });
    result.parkName = fullName;
    result.images = urls;
    parksInfo.push(result);

    if (parksInfo.length === parksArray.length) {
      writeToFile(JSON.stringify(parksInfo, null, 2), 'parkData.txt');
    }
    console.log('parksInfo', parksInfo);
  } catch (err) {
    console.log(`Error in fetch: ${err}`);
  }
};

//fetchParkData();

// const writeToFile = (data, fileName) => {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log(`Data written to ${fileName} successfully.`);
//     }
//   });
// };

/////////////////
const getParkData = async () => {
  try {
    const parks = parksArray[0];
    const result = {};
    const url = 'https://developer.nps.gov/api/v1/parks?';
    const apiKey = 'IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D'; // Replace with your NPS API key

    const promises = parks.map(async (parkCode) => {
      const response = await axios.get(
        `${url}api_key=${apiKey}&?parkCode=${parkCode}`
      );

      const parkData = response.data.data;
      const fullName = parkData[0].fullName;
      const images = parkData[0].images;

      const urls = images.map((image) => image.url);

      result[parkCode] = {
        parkName: fullName,
        images: urls,
      };
    });

    await Promise.all(promises);

    writeToFile(JSON.stringify(result, null, 2), 'parkData.txt');
    console.log(result);
  } catch (err) {
    console.log(`Error in fetch: ${err}`);
  }
};

// const writeToFile = (data, fileName) => {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log(`Data written to ${fileName} successfully.`);
//     }
//   });
// };

//getParkData();

////
const axiosFetchParkData = async () => {
  const parksNameAndUrl = [];
  let index = 0;

  const intervalId = setInterval(async () => {
    try {
      const result = {};
      const urls = [];
      const parkCode = parksArray[index];
      const url = 'https://developer.nps.gov/api/v1/parks?';
      const apiKey = 'IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D';

      const response = await axios.get(
        `${url}api_key=${apiKey}&parkCode=${parkCode}`
      );
      const parkData = response.data.data;
      const fullName = parkData[0].fullName;
      const images = parkData[0].images;

      images.forEach((image) => {
        urls.push(image.url);
      });
      result.parkName = fullName;
      result.images = urls;
      parksNameAndUrl.push(result);
      console.log('parkdataArr', parksNameAndUrl);

      if (parksNameAndUrl.length === parksArray.length) {
        clearInterval(intervalId);
        writeToFile(JSON.stringify(parksNameAndUrl, null, 2), 'parkData.txt');
      }

      index++; // Increment the index
      if (index >= parksArray.length) {
        clearInterval(intervalId);
      }
    } catch (err) {
      console.log(`Error in fetch: ${err}`);
    }
  }, 5000);
};

axiosFetchParkData();

const writeToFile = (data, fileName) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Data written to ${fileName} successfully.`);
    }
  });
};
