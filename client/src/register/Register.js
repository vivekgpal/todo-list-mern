import { useState } from "react";
import "./Register.css";
import {Link} from 'react-router-dom';
import axios from "axios";
function Register(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register",{
                username,
                email,
                password,
             });
             console.log(res);
             res.data && window.location.replace("/login");

        }catch(err){
            e.preventDefault();
            console.log(err);
        }
    }
    return(
        <div className="registerPage">
            <button className="registerLoginButton" type="submit"><Link className="link" to="/login">Login</Link></button>
            <div>
                <form className="register" onSubmit={handleSubmit}>
                <label> userName </label><br />
                <input 
                    type="text"
                    placeholder="Enter your username..."
                    onChange={(e)=>setUsername(e.target.value)}
                    
                /><br />
                <label>Email</label><br />
                <input
                    type="email"
                    placeholder="Enter YOur Email..."
                    onChange={(e)=>setEmail(e.target.value)}
                 /><br />
                 <label>password</label><br />
                <input
                    type="password"
                    placeholder="Enter YOur Email..."
                    onChange={(e)=>setPassword(e.target.value)}
                 /><br />
                <button className="registerButton" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;