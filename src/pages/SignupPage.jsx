import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert('Signup failed: ' + error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="heading">Create an Account</h2>
                <p className="subheading">Join us and explore new opportunities!</p>
                <div className="input-group">
                    <label className="label">Email</label>
                    <input
                        className="input-field"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label className="label">Password</label>
                    <input
                        className="input-field"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="submit-btn"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
