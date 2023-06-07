// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
// import axios from 'axios';

// export const App = () => {
//   const login = useGoogleLogin({
//     onSuccess: async tokenResponse => {
//       try {
//         const data = await axios.get(
//           'https://www.googleapis.com/oauth2/v3/userinfo',
//           {
//             headers: {
//               Authorization: `Bearer ${tokenResponse.access_token}`,
//             },
//           }
//         );
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   });

//   return (
//     <div className="App">
//       <h1>Parks & Rec!</h1>
//       <button onClick={() => login()}>Continue with google</button>

//       <GoogleLogin
//         onSuccess={credentialResponse => {
//           console.log(credentialResponse);
//           // if (credentialResponse.credential !== undefined) {
//           const decoded = jwt_decode(credentialResponse.credential!); // Non-null assertion operator (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator:~:text=for%20z).-,Non%2Dnull%20assertion%20operator,-A%20new%20!)
//           console.log(decoded);
//           // }
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//       />
//     </div>
//   );
// };
