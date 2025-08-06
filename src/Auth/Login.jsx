import React, { useRef, useState } from "react";
import {useForm} from "react-hook-form";

function Login(props){
    //props setCrededntials

    const [login, getValues] = useForm();
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(false);
    // async function handleSubmit(e){
    //     e.preventDefault();
    //     setLoading(true);
    //     const [email,password] = getValues();
    //     fetch("http://localhost:3000/api/login", {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             password: password
    //         })
    //     }).then(res => {
    //         res.json();
    //         props.setCredentials(res);
    //     }).catch(err => {
    //         console.error(err)
    //         props.setCredentials(null);
    //         setError(err);
    //     }).finally(()=>setLoading(false));

        
    //     console.log("Email: " + email + ", Password: " + password);
        
    // }

    // async function handleGoogleSubmit(e){
    //     e.preventDefault();
    //     await fetch("http://localhost:3000/api/googleLogin",{
    //         method: "get"
    //     }).then(res => {
    //         res.json();
    //         props.setCredentials(res);
    //     }).catch(err => {
    //         console.error(err);
    //         props.setCredentials(null);
    //         setError(err);
    //         setLoading(false);
    //     });
    // }

    return <section className="login-section">
        <div className="login-div">
            <h2>Welcome back</h2>
            {err && <p>Email and Password didn't matched! Please Try Again!</p>}
            <form>
                <input type="text" {...login("email")}/>
                <input type="password" {...login("password")}/>
                <button onClick={handleSubmit} >
                    {loading && <span>
                        <div className="spinner"></div>
                    </span>}
                Login</button>
                <div>OR</div>
                <button onClick={handleGoogleSubmit}>Google</button>
            </form>
            
        </div>
    </section>
}