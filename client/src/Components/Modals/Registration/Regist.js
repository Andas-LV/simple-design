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
      console.log("fuck out");
    }
  };

  return (
    <div
      className={active ? "regist active" : "regist"}
      onClick={() => setActive(false)}>
      <div className="regist-content" onClick={(e) => e.stopPropagation()}>
        {/* FORM START */}
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-title">Sign up</p>
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
            Sign up
          </button>

          
        </form>
        {/* FORM END */}
      </div>
    </div>
  );
};
export default Regist;
