import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../registr/Login';

function LoginPages() {
  return (
    <div>
        <h1>Login</h1>
        <Login/>
            <p>
                Or <Link to="/register">Register</Link> 
            </p>
    </div>
  )
}

export default LoginPages