import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const loginToGoogle = useGoogleLogin({
    onSuccess: tokenResponse => {
      const access_token = tokenResponse.access_token;
      localStorage.setItem('loginWith', 'Google');
      localStorage.setItem('accessToken', access_token);
      // pass the access token to backend to get userInfo
      // fetch(
      //   // 'http://localhost:3000/login/oauth?accessToken=' +
      //   //   `${access_token}`,
      //   `/api/login${access_token}`,
      //   {
      //     mode: 'cors',
      //   }
      // )
      fetch(`/api/login/oauth?accessToken=${access_token}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('given_name', data.given_name);
          localStorage.setItem('picture', data.picture);
          navigate('/home');
        });
    },
  });

  return (
    <>
      <nav className="Navbar-login">
        <div className="navbar-header ">
          <h1>Parks & Rec</h1>
        </div>
      </nav>
      <div className="loginContainer">
        <h1>Login with Google</h1>
        <button className="loginBtn" onClick={() => loginToGoogle()}>
          Log In
        </button>
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

export default LoginPage;
