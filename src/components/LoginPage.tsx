import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import tree from '../assets/tree.png';
import camper from '../assets/camper.png';

const LoginPage = () => {

    const navigate = useNavigate();

  const loginToGoogle = () => {
    //     onSuccess: tokenResponse => {
    //         localStorage.setItem('loginWith', 'Github')
    //         localStorage.setItem('accessToken', tokenResponse.access_token)
    //     navigate('/home')
    //   },
    navigate('/home'); // data.given_name from Carolyn's PR
    }

    return(
        <>
        <nav className="Navbar-login">          
            <div className="navbar-header ">
                <h1>Parks & Rec</h1>
            </div>          
        </nav>
        <div className='loginContainer'>
            <h1>Login with Google</h1>
            <button onClick={() => loginToGoogle()}> Login</button>
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


export default LoginPage;
