import { Button } from '@material-ui/core';
import React from 'react';
import { logout,login } from './features/userSilce';
import {auth,provider} from "./firebase"
import "./Login.css";
import {useDispatch} from "react-redux";
//import loginpic from "../public/login.jpg";
export function Login(props) {
    const dispatch = useDispatch();
    const signIn = ()=>{
       auth.signInWithPopup(provider)
       .then(({user})=>{
           dispatch(login(
               {
                   displayName: user.displayName,
                   email: user.email,
                   photourl:user.photoURL
               }
           ))
       })
       .catch(error=> alert(error.message));
    };

    return (
        <div className="login">
            <div  className ="login__container">
                <img src ="\login.jpg" alt="gmail__login"  />
             <Button variant ="contained" color="primary" onClick={signIn} >Login</Button>
            </div>
        </div>
    )
}
export default Login ;