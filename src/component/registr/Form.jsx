import React from 'react'
import { useState } from "react";

function Form({title,onSubmitHandler}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <form onSubmit={(e) => onSubmitHandler(e,email,password)}>

            <label htmlFor="email">Введите ваш e-mail</label>
            <input 
            required
            type="text"
            name="email"
            id="email"
            placeholder="cnemirovka@gmail.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Введите ваш пароль</label>
            <input 
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}/>

             <button type="submit" >{title}</button>
        </form>
    </div>
  )
}

export {Form};