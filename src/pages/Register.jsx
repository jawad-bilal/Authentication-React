import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState(""); // Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function RegisterAPI() {
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }), // ✅ Send name too
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Registration Successful! Navigating to Login Page");
          navigate("/login");
        } else {
          alert(data.message || "Registration failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Server Error.");
      });
  }

  const RegisterUser = () => {
    if (!name || !email || !password) {
      alert("Please Fill All Fields. Thank you");
    } else {
      RegisterAPI();
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={RegisterUser}>Register</button>
    </div>
  );
}

export default Register;
