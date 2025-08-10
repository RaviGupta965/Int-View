import React from "react";
import { useNavigate} from "react-router-dom";
function LandingPage(){
    const navigate= useNavigate();
    return <section>
        <h1>Landing Page</h1>
        <button onClick={()=>navigate('/login')}><button>Login</button></button>
        <button onClick={()=>navigate('/register')}><button>Register</button></button>
    </section>
}
export default LandingPage;