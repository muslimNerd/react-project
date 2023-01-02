import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }


    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email"  name="email"/>
            <label htmlFor="password">PASSWORD</label>
            <input value={pass} type="password" placeholder="*********" id="password" name="password" />
            <button type="submit">LOG IN</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}