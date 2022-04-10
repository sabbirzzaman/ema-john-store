import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="form-container">
            <div className="form-heading">
                <h2>Sign Up</h2>
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
                    <label htmlFor="confirm-password">Password</label>
                    <input
                        type="confirm-password"
                        name="confirm-password"
                        placeholder="Re enter your password"
                        id="confirm-password"
                    />
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
