import React from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { removeUser } from '../store/userSlice';
import {useAuth} from '../hooks/useAuth'

function HomePages() {
  const dispatch = useDispatch();
  const {isAuth, email, name} = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome, {name}</h1>
      <button
       onClick={() => dispatch(removeUser())}>Log out from {name}</button>
    </div>
  ) : ( 
      <Navigate to="/login" />
      )
}

export default HomePages