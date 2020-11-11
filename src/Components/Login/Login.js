import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import '../Login/Login.css';

import { auth } from '../../firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src='https://raw.githubusercontent.com/pranjals149/acevent/75eed4a1a0a65bdde48eddf5e5c061fca26b3934/expend/expend.svg' alt='' />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Account</button>

            </div>
        </div>
    )
}

export default Login
