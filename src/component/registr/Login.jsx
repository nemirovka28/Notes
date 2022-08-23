import React from 'react'
import { Form } from './Form'
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports'
import {setUser} from '../store/userSlice';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = (e,email,password) => {
        e.preventDefault();
        const auth = getAuth();      
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(setUser({
                email:user.email,
                id:user.id,
                token:user.accessToken,
            }))
            navigate("/", { replace: true });
        })
        .catch(console.error)
    }
  return (
    <Form
    title="Sign in"
    onSubmitHandler={onSubmitHandler}/>
  )
}

export default Login