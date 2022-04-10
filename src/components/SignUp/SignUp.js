import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayError, setDisplayError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            return setDisplayError('Invalid! Password not matched.')
        } else {
            setDisplayError('')
        }

        createUserWithEmailAndPassword(email, password);
    };

    if(user) {
        navigate('/');
    }

    return (
        <div className="form-container">
            <div className="form-heading">
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSignUp}>
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
                <div className="field-group">
                    <label htmlFor="confirm-password">Password</label>
                    <input
                        onBlur={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        name="confirm-password"
                        placeholder="Re enter your password"
                        id="confirm-password"
                        required
                    />
                </div>
                <div className="error">
                    <p>{displayError}</p>
                </div>
                <div className="field-group">
                    <input type="submit" value="Login" />
                </div>
                <div className="field-group">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
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

export default SignUp;
