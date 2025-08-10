import React from "react";
import { useNavigate,Link } from "react-router-dom";
function LandingPage(){
    const navigate= useNavigate();
    return <section>
        <h1>Landing Page</h1>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
    </section>
}
export default LandingPage;