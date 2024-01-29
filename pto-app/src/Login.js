import React from 'react';
import './Login.css';
//import { useMsal } from 'react-msal';

const Login = () => {
  //const { login } = useMsal();

  const handleLogin = () => {
    //login();
    try {
        // Your login logic using MSAL or other authentication library
        // login();
      } catch (error) {
        console.error('Login failed:', error);
        // Handle the error, e.g., display an error message to the user
      }
  };

  return (
    <div>
      <h1 className='Outlook'>Login to Outlook</h1>
      <button className='LoginButton' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;