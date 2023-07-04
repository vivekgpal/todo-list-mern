import { useState } from "react";
import "./Home.css";
import {Link} from 'react-router-dom';
import "./Home.css";

let ids =0;
function Home(){
    const[value,setValue] = useState();
    const[data,setData] = useState([]);
   
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(value!="" )
        setData((predata)=> [...predata,{id:ids++,item:value}])
        setValue("");
        
    }
     const del =(props)=>{
   
        const newItemList = data.filter((items) => props!=items.id);
        setData(newItemList);
     }
    
   
    return(
        <div className="home">
            <button className="registerButton homeRegisterButton" type="submit"><Link className="link" to="register">Register</Link></button>
            <button className="loginButton homeLoginButton" type="submit"><Link className="link" to="login">Login</Link></button>
            <h1>Add items to list</h1>
            <form onSubmit={handleSubmit}>
              <input 
                  type="text"
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
              />
              <button className="loginButton" type="submit">Add</button>
            </form>
           <ul>
            {data.map((props)=> {return (<div  key={props.id}>
            
                <span className="items" onClick={() => del(props.id)}>
                <div className="item">
                <span className="itemName">{props.item} </span>
                <button className="removeBtn" onClick={() => del(props.id)}>
                <i class="fa-solid fa-delete-left"></i>
                </button>
                </div>
                </span>
                
                    </div>) }  )}

           </ul>
            
        </div>
    )
}

export default Home;