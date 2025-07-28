import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

function Register (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const Register =() =>{
        if (email && password){
            localStorage.setItem("user", JSON.stringify({email, password}));
            alert("Registration Successful!!");
            navigate("/login")

        }
        else{
            alert("Please Fill All Fields.Thank you");

        }

    };
    return (
        <div>
            <h2>Register</h2>
            <input type="email" placeholder="Enter Your Email" 
            onChange={(e) =>
                setEmail(e.target.value)
            }/>
            <input type="password" placeholder="Enter Password" 
            onChange={(e) =>
                setPassword(e.target.value)
            }/>
            <button onClick={Register}>Register</button>
        </div>
    )
 
}

export default Register