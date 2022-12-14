import React from 'react'
// import { Form } from '../Form/Form'
// import {useNavigate} from 'react-router-dom';
// import { getAuth,signInWithPopup,signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports';
import { logIn } from '../../store/auth/auth-operations';

// import {setUser} from '../../store/userSlice';
// import classes from './Login.module.css';

function Login() {
    const dispatch = useDispatch();

    const onLoginUser = event => {
        event.preventDefault();
        const form = event.currentTarget;

        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        dispatch(logIn(user));
        form.reset();
    };

    return (
    <form onSubmit={onLoginUser} >
      <label >
        Email
        <input
            type="email"
            name="email"
            placeholder="Email"
            required
        />
      </label>
      <label >
         Password
         <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
      </label>
      <button type="submit" >
        Sign in
      </button>
    </form>
    );
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const onSubmitHandler = (e,email,password) => {
//         e.preventDefault();
//         const auth = getAuth();   
//         signInWithEmailAndPassword(auth, email, password)
//         .then(({user})=>{
//             dispatch(setUser({
//                 email:user.email,
//                 id:user.id,
//                 token:user.accessToken,
//             }))
//             navigate("/homePage", { replace: true });
//         })
//         .catch(() => alert('Invalid password or email'))
//     }
//     function onSubmitGoogle () {
//       const provider = new GoogleAuthProvider();
//       provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
//       const auth = getAuth();
//       auth.languageCode = 'it';

//       signInWithPopup(auth, provider)
//       .then((result) => {
//           const credential = GoogleAuthProvider.credentialFromResult(result);
//           const token = credential.accessToken;
      
//           const user = result.user;
//           dispatch(setUser({
//               name: user.displayName,
//               email:user.email,
//               id:user.uid,
//               token:user.accessToken,
//           }))
//           navigate("/homePage", { replace: true });
//       }).catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           const email = error.customData.email;
//           const credential = GoogleAuthProvider.credentialFromError(error);

//       });
//   }
//   return (
//     <div>
//       <Form
//         title="Sign in"
//         onSubmitHandler={onSubmitHandler}/>
//         <button 
//             className={classes.btn}
//             onClick={onSubmitGoogle}>
//                 Login with Google
//         </button>
//     </div>
//   )
}

export default Login