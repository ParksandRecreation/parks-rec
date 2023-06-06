
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import tree from '../assets/tree.png';

const LoginPage = () => {
    const navigate = useNavigate();

  const loginToGoogle = () => {
    //     onSuccess: tokenResponse => {
    //         localStorage.setItem('loginWith', 'Github')
    //         localStorage.setItem('accessToken', tokenResponse.access_token)
    //     navigate('/home')
    //   },
    navigate('/home');
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
        <img className="tree" src={tree}/>
        </>
    )
}

export default LoginPage;