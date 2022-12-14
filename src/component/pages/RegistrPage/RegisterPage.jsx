import React from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../../registr/SignUp/SignUp';
import classes from './RegisterPage.module.css'

function RegisterPage() {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Registration</h1>
        <SignUp/>
          <Link 
            className={classes.text}
            to="/login"> Alredy have an account?
          </Link> 
    </div>
  )
}

export default RegisterPage