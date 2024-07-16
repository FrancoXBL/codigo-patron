import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../../const/API_KEY";


const Login = ({logged, setLogged}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${API_KEY}/api/auth/login`,
        { username, password }
      );

      const token = response.data.token;

      localStorage.setItem("token", token);

      setSuccess("Login successful!");
      setError("");
      setLogged(true)
    } catch (error) {
      setError("Invalid username or password");
      setSuccess("");
    }
  };

  return (
    <div className="loggin">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="loggin-box">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="loggin-box">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
