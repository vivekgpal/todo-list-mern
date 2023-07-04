import "./Login.css"
import {Link} from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
function Login(){
    const userRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            console.log(res);
            res.data && window.location.replace("/")

        }catch(err){
            e.preventDefault();
            console.log(err);
        }

    }
    return (
        <div className="loginPage">
         <button className="loginRegisterButton" type="submit"> <Link className="link" to="/register">Register</Link></button>
        <div className="Login">
         
            <form onSubmit={handleSubmit}>
             <label>username</label><br />
             <input
                type="text"
                className="loginInput"
                placeholder="Enter your userName"
                ref = {userRef}
            /><br />
            <label> Password </label> <br />
            <input 
                type="password"
                className="loginInput"
                placeholder="Enter your password..."
                ref={passwordRef}
            /><br />
            
            <button className="loginButton" type="submit">Login</button>

            </form>

           
            
        </div>
        </div>
    )
}
export default Login;