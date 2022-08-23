import React from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { removeUser } from '../../store/userSlice';
import {useAuth} from '../../hooks/useAuth'

function HomePages() {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome, {email.split('@')[0]}</h1>
      <button
       onClick={() => dispatch(removeUser())}>Log out from {email.split('@')[0]}</button>
    </div>
  ) : ( 
      <Navigate to="/login" />
      )
}

export default HomePages