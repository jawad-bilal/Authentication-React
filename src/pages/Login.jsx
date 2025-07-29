import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function LoginAPI() {
    fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(response =>
        response.json().then(data => ({ ok: response.ok, data }))
      )
      .then(res => {
        if (res.ok) {
          alert("Login Successful!!");

          if (res.data && res.data.data && res.data.data.tokens) {
            localStorage.setItem("accessToken", res.data.data.tokens.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.data.user));
          } else {
            console.warn("No tokens found in response");
          }

          navigate("/home");
        } else {
          alert(res.data.message || "Invalid Email or Password. Try Again");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Server Error. Please try again.");
      });
  }

  const login = () => {
    // const StoreUser = JSON.parse(LoginAPI.getItem("user"));
    if (email && password) {
      console.log("Logging in with:", { email, password });
      LoginAPI();

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
