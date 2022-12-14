import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../../registr/Login/Login';
import classes from "./LoginPage.module.css";
import MyButton from '../../UI/button/MyButton';

function LoginPages() {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Log in</h1>
        <Login/>
            <p className={classes.text}>
                 <Link to="/register">
                  <MyButton>Registration</MyButton>
                  </Link> 
            </p>
    </div>
  )
}

export default LoginPages