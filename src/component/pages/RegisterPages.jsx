import React from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../registr/SignUp';

function RegisterPages() {
  return (
    <div>
        <h1>Register</h1>
        <SignUp/>
             <p>
                Alredy have an account? <Link to="/login">Sign in</Link> 
            </p>
    </div>
  )
}

export default RegisterPages