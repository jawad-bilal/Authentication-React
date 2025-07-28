import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      navigate("/login");
    }
  }, [navigate]);

  return <h2>Welcome to Home Page!</h2>;
}
export default Home
