import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Form } from './Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports'
import {setUser} from '../store/userSlice';

function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandlerRegister = (e,email,password) => {
        e.preventDefault();
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
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
        title="Register"
        onSubmitHandler={onSubmitHandlerRegister}/>
      )
}

export default SignUp