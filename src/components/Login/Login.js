import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    const from = location.state?.from?.pathname || '/';

    if(user) {
        navigate(from, {replace: true});
    }

    return (
        <div className="form-container">
            <div className="form-heading">
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin}>
                <div className="field-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onBlur={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        id="email"
                        required
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                        required
                    />
                </div>
                <div className="error">
                    <p>{error?.message}</p>
                </div>
                <div className="field-group">
                    <input type="submit" value="Login" />
                </div>
                <div className="field-group">
                    <p>
                        New to Ema-john?{' '}
                        <Link to="/signup">Create an account.</Link>
                    </p>
                </div>
            </form>
            <div className="divider">
                <hr />
                <span>Or</span>
                <hr />
            </div>
            <div className="form-google">
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
