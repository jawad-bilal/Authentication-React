import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function RegisterAPI() {
        fetch("http://localhost:5001/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
          })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                alert("Registration Successful!! Naviagating to Login Page");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Server Error.");
            });
        }

    const RegisterUser = () => {
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
        alert("Please Fill All Fields. Thank you");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
    } else {
        RegisterAPI();
    }
};
        return (
            <div>
                <h2>Register</h2>
                <input type="email" placeholder="Enter Your Email"
                    onChange={(e) =>
                        setEmail(e.target.value)
                    } />
                <input type="password" placeholder="Enter Password"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    } />
                <button onClick={RegisterUser}>Register</button>
            </div>
        )

    }

    export default Register