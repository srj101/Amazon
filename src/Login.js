import React,{useState} from 'react';
import './login.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon_logo_PNG3.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={ e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ e=> setPassword(e.target.value)} />

                    <button
                    type="submit"
                    onClick={signIn}
                    className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to srjou's amazon projects Conditions of use &amp; Sale. Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.</p>
                <button
                onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
