import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="form-container">
            <div className="form-heading">
                <h2>Login</h2>
            </div>
            <form>
                <div className="field-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        id="email"
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                    />
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
