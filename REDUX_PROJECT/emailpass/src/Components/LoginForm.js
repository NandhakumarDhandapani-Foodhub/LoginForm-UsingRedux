import React, { useState } from "react";
import { login } from "../SliceComp/userSlice";
import { useDispatch } from "react-redux";
const LoginForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //    e.preventDefault();

    //    props.ADD_LOGIN({
    //       type: ADD_LOGIN,
    //       payload: {
    //           name: name,
    // email: email,
    // password: password,
    //       }
    //    })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );

        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here </h1>
                <input
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;



 // dispatch(props.addLogin({
    //    type: 'LoginOn',
    //    payload: {
    //       name: name,
    //       pass: pass,
    //    }
    // }));