import React, { useRef, useState } from "react";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom"
import "../CSS/Login.css"

function Login(){
    //props setCrededntials

    // login Credentials, loading State, error state
    const {register, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(false);

    // FETCH API FOR FORM SUBMISSION AND GOOGLE LOGIN

    function onSubmit(data){
        console.log(data);
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
    }

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
            
            {/* if err then show the message */}

            {err && <p>Email and Password didn't matched! Please Try Again!</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("email")} placeholder="Email"/>
                <input type="password" {...register("password")} placeholder="Password"/>
                <button 
                // onClick={handleSubmit} 
                className="login-button"
                type="submit">
                    {/* spinner starts on click */}
                    {loading && <span>
                        <div className="spinner"></div>
                    </span>}
                Login</button>
                <div className="or-div"><p>or</p></div>
                <button className="google-button"
                // onClick={handleGoogleSubmit}
                
                > <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" alt="google login" /></span> Google</button>
            </form>
            <p className="redirect">Do not have an account? <span><a href="/register">Register</a></span></p>
        </div>
    </section>
}
export default Login;