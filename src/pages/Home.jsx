import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    } else {
      fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setUser(data.data.user);
          } else {
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
        })
        .catch(() => {
          localStorage.removeItem("accessToken");
          navigate("/login");
        });
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to Home Page!</h2>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Home;
