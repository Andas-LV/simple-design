import React, {useState} from "react";
import axios from "axios";
import "./login.css";

const Login = ({ active, setActive, onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const token = response.data.token;
      onLogin(token);
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
    }
  };

  return (
    <div
      className={active ? "login active" : "login"}
      onClick={() => setActive(false)}>
      <div className="login-content" onClick={(e) => e.stopPropagation()}>
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
      </div>
    </div>
  );
};
export default Login;
