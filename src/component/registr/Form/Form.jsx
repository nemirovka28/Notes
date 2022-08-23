import React from 'react'
import { useState } from "react";
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import classes from './Form.module.css';

function Form({title,onSubmitHandler}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className={classes.center}>
        <form 
        className={classes.content}
        onSubmit={(e) => onSubmitHandler(e,email,password)}>
            <label
              className={classes.label} 
              htmlFor="email">Введите ваш e-mail*</label>
            <MyInput 
            required
            type="text"
            name="email"
            id="email"
            placeholder="cnemirovka@gmail.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}/>

            <label 
              className={classes.label}
              htmlFor="password">Введите ваш пароль*</label>
            <MyInput 
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}/>
            <MyButton type="submit" >{title}</MyButton>
        </form>
    </div>
  )
}

export {Form};