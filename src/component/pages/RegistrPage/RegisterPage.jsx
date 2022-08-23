import React from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../../registr/SignUp/SignUp';
import classes from './RegisterPage.module.css'

function RegisterPage() {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Register</h1>
        <SignUp/>
             <p className={classes.text}>
                Alredy have an account? <Link to="/login">Sign in</Link> 
            </p>
    </div>
  )
}

export default RegisterPage