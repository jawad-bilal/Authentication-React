import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const StoreUser = JSON.parse(localStorage.getItem("user"));
    if (
      StoreUser &&
      email === StoreUser.email &&
      password === StoreUser.password
    ) {
      localStorage.setItem("isAuthenticated", "ture");
      alert("Login Successful!!");
      navigate("/home");
    } else {
      alert("Invalid Email or Password. Try Again");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
