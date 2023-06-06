
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    // const navigate = useNavigate();

    // const loginToGoogle = useGoogleLogin({
    //     onSuccess: tokenResponse => {
    //         localStorage.setItem('loginWith', 'Github')
    //         localStorage.setItem('accessToken', tokenResponse.access_token)
    //         navigate('/home')
    //     },
    // })

    return(
    <div className='loginContainer'>
        <h1>Login with Google</h1>
         <button > Login</button>
    </div>
        
    )
}

export default LoginPage;