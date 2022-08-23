import React from 'react'
import { useState } from "react";

function Form({title,onSubmitHandler}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <form onSubmit={(e) => onSubmitHandler(e, name,email,password)}>
           <label htmlFor="email">Введите вашe имя</label>
            <input 
            required
            type="text"
            name="name"
            id="name"
            placeholder="Alex"
            value={name}
            onChange={ (e) => setName(e.target.value)}/>

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