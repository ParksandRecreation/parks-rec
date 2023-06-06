import axios from 'axios';

const parks = [
  'ACAD',
  'ARCH',
  'BADL',
  'BIBE',
  'BISC',
  'BLCA',
  'BRCA',
  'CANY',
  'CARE',
  'CAVE',
  'CHIS',
  'CONG',
  'CRLA',
  'CUVA',
  'DENA',
  'DEVA',
  'DRTO',
  'EVER',
  'GAAR',
  'GLAC',
  'GLBA',
  'GRBA',
  'GRCA',
  'GRSA',
  'GRSM',
  'GRTE',
  'GUMO',
  'HALE',
  'HAVO',
  'HOSP',
  'ISRO',
  'JOTR',
  'KATM',
  'KEFJ',
  'KOVA',
  'LACL',
  'LAVO',
  'MACA',
  'MEVE',
  'MORA',
  'NOCA',
  'NPSA',
  'OLYM',
  'PEFO',
  'PINN',
  'REDW',
  'ROMO',
  'SAGU',
  'SEKI',
  'SHEN',
  'THRO',
  'VOYA',
  'WICA',
  'WRST',
  'WTNP',
  'YELL',
  'YOSE',
  'YUCH',
  'ZION',
];

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

const fetchParkData = async (parkCode) => {
  try {
    // const url = 'https://developer.nps.gov/api/v1/parks?';
    const park = 'Arches';
    const apiKey = 'IWyuEZvrGxb378F1joFqwX1BI0KPDGpLeqvAi87D&limit=100';
    const response = axios.get(
      `https://developer.nps.gov/api/v1/parks/${parkCode}?api_key=${apiKey}&q=${park}`
    );
    const parkData = response.data;
    const description = parkData[0].description;
    // const imageUrls = parkData.images.map((image) => image.url);

    console.log(description);
    // console.log(imageUrls);
  } catch (err) {
    console.log(`Error in fetch: ${err}`);
  }
};
const parkCode = 'ACAD'; // Replace with the desired park code
fetchParkData(parkCode);
