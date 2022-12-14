import React from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { logOut } from '../../store/auth/auth-operations';
import { getUserName } from '../../store/auth/auth-selectors';
import classes from './HomePage.module.css';
import {useAuth} from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

function HomePages() {
  
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const name = useSelector(getUserName);

  return isAuth ? (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1 className={classes.title}>Welcome,{name} </h1>
              <button
                className={classes.btn}
                onClick={() => dispatch(logOut())}>
                  Log out from 
              </button>
          </div>
        </div>
    </div>
    <ContactForm/>
    <Filter/>
    <ContactList/>
    </>
  ) : ( <Navigate to="/login"/> )
}

export default HomePages