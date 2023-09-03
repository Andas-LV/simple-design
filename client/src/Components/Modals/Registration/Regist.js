import React, { useState } from "react";
import axios from "axios";
import "./Regist.css";

const Regist = ({ active, setActive }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      console.log("Registration successful");
    } catch (error) {
      console.error("fuck out");
    }
  };
  return (
    <div
      className={active ? "regist active" : "regist"}
      onClick={() => setActive(false)}>
      <div className="regist-content" onClick={(e) => e.stopPropagation()}>
        {/* FORM START */}
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-title">Sign in to your account</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit">
            Sign in
          </button>

          <p className="signup-link">
            No account?
            <a href="/">Sign up</a>
          </p>
        </form>
        {/* FORM END */}
        REGISTRATION
      </div>
    </div>
  );
};
export default Regist;
