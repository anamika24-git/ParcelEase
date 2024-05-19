import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  const { username, password } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "parcel" && password === "parcel") {
      setError(""); // Clear error message
      handleLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>IIIT Bangalore</h1>
        <h2>ParcelEase</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username"
            className="input-field"
          /><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            className="input-field"
          /><br />
          <input type="submit" name="submit" value="Login" className="login-button" />
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
